import LogoItau from "../../assets/logo.svg"
import IconUser from "../../assets/icon-user.svg"
import * as S from './styles'

import Button from "../Button"


function Header() {


    return (
        <S.Header>
            <S.Container>
                <S.ContainerItens>
                    <div>
                        <S.Img src={LogoItau} alt="logo" />
                    </div>
                    <S.Ul>
                        <S.Li>
                            <Button info='Para você'/>
                        </S.Li>
                        <S.Li>
                            <Button info='Para empresas'/>
                        </S.Li>
                        <S.Li>
                            <Button info='Para Serviços'/>
                        </S.Li>
                        <S.Li>
                            <Button info='Ajuda'/>
                        </S.Li>
                    </S.Ul>

                    <S.DivButtonAcess>
                        <S.ButtonAcess>
                            <img src={IconUser} alt="icone do usuario" />
                            <span>Acessar conta</span>
                        </S.ButtonAcess>
                    </S.DivButtonAcess>
                </S.ContainerItens>
            </S.Container>
        </S.Header>
    )
}

export default Header
