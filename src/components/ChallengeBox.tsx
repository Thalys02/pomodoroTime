import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import { CountdownContext } from "../contexts/CountdownContext";
import styles from "../styles/components/ChallengeBox.module.css";

export function ChallengeBox() {
  const { activeChallenge, resetChallenge, completeChallenge,activeDarkMode } = useContext(
    ChallengesContext
  );
  const {resetCountDown} = useContext(CountdownContext)

    function handleChallengeSucceeded(){
      completeChallenge();
      resetCountDown();
    }
    function handleChallengFailed(){
      resetChallenge();
      resetCountDown();
    }


  return (
    <div className={activeDarkMode?styles.darkModeChallengeBoxContainer:styles.challengeBoxContainer}>
      {activeChallenge ? (
        <div className={styles.challengeActive}>
          <header> Ganhe {activeChallenge.amount} xp</header>
          <main>
            <img src={`icons/${activeChallenge.type}.svg`} alt="Desafio" />
            <strong>Novo Desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <button
              type="button"
              className={styles.challengeFailedButton}
              onClick={handleChallengFailed}
            >
              Falhei
            </button>

            <button
              type="button"
              className={styles.challengeSucceededButton}
              onClick={handleChallengeSucceeded}
            >
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengeNotActive}>
          <strong>Finalizar um ciclo para receber um novo desafio</strong>
          <p>
            <img src="icons/level-up.svg" alt="Level Up" />
            Avance de level completando o maior numero de desafios possiveis.
          </p>
        </div>
      )}
    </div>
  );
}
