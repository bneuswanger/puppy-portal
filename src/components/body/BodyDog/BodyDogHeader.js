import styles from './BodyDogHeader.module.css'
import female from '../../../assets/gender-female.svg'
import male from '../../../assets/gender-male.svg'
import ImageModal from '../../UI/ImageModal'
import { useState } from 'react'
import { currentAgeLiveDog, ageAtDeath, nth } from '../../../utils/ageCalc'

const BodyDogHeader = (props) => {
  const { birthDate, deathDate, genetics, name, sex, breed, owners } = props.dog
  const currentAge = currentAgeLiveDog(birthDate)
  const lifeSpan = ageAtDeath(birthDate, deathDate)
  const birthDaySuffix = nth(birthDate)

  // State management
  const [isGeneticsShown, setIsGeneticsShown] = useState(false)
  const toggleGenetics = () => {
    setIsGeneticsShown(!isGeneticsShown)
  }

  return (
    <div>
      {isGeneticsShown && (
        <ImageModal
          btnText={'Close'}
          mime={'png'}
          url={genetics.url}
          named={name}
          webp={genetics.webp}
          onDismiss={toggleGenetics}
        />
      )}
      <h1>{name}</h1>
      <div>
        <img
          className={styles.genderIcon}
          src={sex === 'female' ? female : male}
          alt={sex === 'female' ? 'female dog' : 'male dog'}></img>
      </div>
      <time className={styles.range}>{birthDate.getFullYear()} - </time>
      {!deathDate && <time className={styles.range}>present</time>}
      {deathDate && <time className={styles.range}>{deathDate.getFullYear()}</time>}
      <p>{breed}</p>
      {genetics && (
        <div>
          <span
            className={styles.genetics}
            onClick={toggleGenetics}>
            Genetic Analysis Results
          </span>
        </div>
      )}
      <p>Allegedly owned by {owners}</p>
      <p className={styles.smallText}>
        {name} was born on {birthDate.toLocaleString('default', { month: 'long' })} {birthDate.getDate()}
        {birthDaySuffix} {deathDate && `and lived for ${lifeSpan}.`} {!deathDate && `and is currently ${currentAge} old.`}
      </p>
    </div>
  )
}

export default BodyDogHeader
