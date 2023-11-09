import image from '../assets/404.svg'

export function NotFound() {
  return (
    <>
      <img src={image} alt="" width={500} />
      <h1>404</h1>
      <p>Sinto muito, não encontramos a página que está tentando acessar</p>
      <button>Voltar à página inicial</button>
    </>
  )
}
