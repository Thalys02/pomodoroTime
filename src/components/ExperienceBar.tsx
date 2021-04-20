
import { useContext, useState } from 'react';
import { Switch } from "@material-ui/core";
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/ExperienceBar.module.css'

export function ExperienceBar() {

const {currentExperience,experienceToNextLevel,removeDarkMode,setDarkMode,activeDarkMode} = useContext(ChallengesContext)

const percentToNextLevel = Math.round(currentExperience*100)/experienceToNextLevel
const handleChangeAtivo = (event) => {
  if (event.target.checked) {
    setDarkMode();
  } else {
    removeDarkMode();
  }
};
  return (
    <header className={styles.experienceBar}>
      <span> 0 xp</span>
      <div>
        <div
          className={styles.progressBar}
          style={{ width: `${percentToNextLevel}%` }}
        ></div>
        <span
          className={styles.currentExperience}
          style={{ left: `${percentToNextLevel}%` }}
        >
          {currentExperience} xp
        </span>
      </div>
      <span>{experienceToNextLevel} xp</span>
      {/* <div>
        <span>Ativar/Desativar - Dark Mode:</span>
        <Switch
          checked={activeDarkMode}
          onChange={handleChangeAtivo}
          name="ativo"
          inputProps={{ "aria-label": "secondary checkbox" }}
        />
      </div> */}
    </header>
  );
}
