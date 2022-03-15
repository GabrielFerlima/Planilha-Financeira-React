import logoImg from '../../assets/logo.svg' 
import { Container, Content } from './styles'


export function Header() {
    return (
        <Content>
        <Container>
            <img src={logoImg} alt="dt money" /> 
            <button type="button"> 
            Nova transação 
            </button>
        </Container>
        </Content>
       
    )
}