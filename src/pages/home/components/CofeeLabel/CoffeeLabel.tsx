import styles from './CoffeeLabel.module.css'

interface LabelProps {
  labelName: string
}

export function CoffeeLabel({ labelName }: LabelProps) {
  return <span className={styles.label}>{labelName}</span>
}
