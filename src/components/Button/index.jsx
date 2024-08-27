import * as S from './styles'


import ArrowDown from "../../assets/arrow-down.svg"


function Button({info}) {


    return (
        <>
            <S.ButtonHeader>
                <span>{info}</span>
                <img src={ArrowDown} alt="seta" />
            </S.ButtonHeader>
        </>
    )
}

export default Button
