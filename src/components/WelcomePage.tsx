import "./WelcomePage.css"
import { MyOwnHeader } from "./MyOwnHeader";


export const WelcomePage = () => {


    return (
        <>

        <MyOwnHeader/>

        <div className="HP_mainDiv"> 
            <h1> Мировые Запчасти </h1>
            <h2> Наш сайт — это специализированная платформа, предназначенная для продажи качественных запчастей и комплектующих для бизнес-джетов. Мы понимаем, что надежность, скорость и безопасность являются ключевыми требованиями в авиационной отрасли, поэтому предлагаем только сертифицированные запчасти от проверенных производителей, соответствующие высоким стандартам качества. </h2>
        </div>

        <div className="HP_mainDiv_mobile"> 
            <h1> Мировые Запчасти </h1>
            <h2> Наш сайт — это специализированная платформа, предназначенная для продажи качественных запчастей и комплектующих для бизнес-джетов. Мы понимаем, что надежность, скорость и безопасность являются ключевыми требованиями в авиационной отрасли, поэтому предлагаем только сертифицированные запчасти от проверенных производителей, соответствующие высоким стандартам качества. </h2>
        </div>

        </>
    )


}