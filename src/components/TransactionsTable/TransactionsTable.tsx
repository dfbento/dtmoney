import { Container } from './styles'

export function TransactionsTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Salário</td>
            <td className="income">R$1000</td>
            <td>Entradas</td>
            <td>20/06/2020</td>
          </tr>
          <tr>
            <td>Almoço</td>
            <td className="outcome">- R$50</td>
            <td>Saídas</td>
            <td>20/06/2020</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}
