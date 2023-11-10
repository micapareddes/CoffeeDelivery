import { useFormContext } from 'react-hook-form'

import styles from './InfoForm.module.css'

export function AdressForm() {
  const { register } = useFormContext()

  return (
    <div className={styles.adressForm}>
      <input
        type="number"
        id="cep"
        placeholder="CEP"
        autoComplete="postal-code"
        {...register('cep', { valueAsNumber: true })}
      />

      <input
        type="text"
        id="street"
        className={styles.street}
        placeholder="Rua"
        autoComplete="address-line1"
        {...register('street')}
      />

      <input
        type="number"
        id="number"
        placeholder="Número"
        autoComplete="address-line2"
        {...register('number', { valueAsNumber: true })}
      />

      <div className={styles.complementDiv}>
        <input
          type="text"
          id="complement"
          className={styles.complement}
          placeholder="Complemento"
          {...register('complement')}
        />
        <span className={styles.adressComplement}>Opcional</span>
      </div>

      <input
        type="text"
        id="neighborhood"
        placeholder="Bairro"
        autoComplete="address-level3"
        {...register('neighborhood')}
      />

      <input
        type="text"
        id="city"
        placeholder="Cidade"
        autoComplete="address-level2"
        {...register('city')}
      />

      <input
        type="text"
        id="uf"
        placeholder="UF"
        autoComplete="address-level1"
        {...register('uf')}
      />
    </div>
  )
}
