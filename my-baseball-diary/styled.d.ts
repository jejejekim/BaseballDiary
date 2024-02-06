// import original module declarations
import 'styled-components';


// and extend them!
//styled.js에 있는 props의 type 추가하면 됨
declare module 'styled-components' {
    export interface DefaultTheme {
        mainBgColor: string,
        textColor: string,
    }
}