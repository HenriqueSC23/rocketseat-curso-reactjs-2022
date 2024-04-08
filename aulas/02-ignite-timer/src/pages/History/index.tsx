import { HistoryContainer, HistoryList, Status } from './style'

export function History() {
  return (
    <HistoryContainer>
      <h1>Histórico</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tarefa 1</td>
              <td>30 minutos</td>
              <td>Há certca de 1 dia</td>
              <td>
                <Status statusColor="green">Concluída</Status>
              </td>
            </tr>
            <tr>
              <td>Tarefa 1</td>
              <td>30 minutos</td>
              <td>Há certca de 1 dia</td>
              <td>
                <Status statusColor="yellow">Em andamento</Status>
              </td>
            </tr>
            <tr>
              <td>Tarefa 1</td>
              <td>30 minutos</td>
              <td>Há certca de 1 dia</td>
              <td>
                <Status statusColor="red">Incompleta</Status>
              </td>
            </tr>
            <tr>
              <td>Tarefa 1</td>
              <td>30 minutos</td>
              <td>Há certca de 1 dia</td>
              <td>
                <Status statusColor="green">Concluída</Status>
              </td>
            </tr>
            <tr>
              <td>Tarefa 1</td>
              <td>30 minutos</td>
              <td>Há certca de 1 dia</td>
              <td>
                <Status statusColor="green">Concluída</Status>
              </td>
            </tr>
            <tr>
              <td>Tarefa 1</td>
              <td>30 minutos</td>
              <td>Há certca de 1 dia</td>
              <td>
                <Status statusColor="green">Concluída</Status>
              </td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
