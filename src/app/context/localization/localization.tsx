import React, { createContext, ReactNode, useContext, useState } from 'react'
import { en } from '../../resources/languages/en'
import { tr } from '../../resources/languages/tr'

interface localizationProps {
    children?: ReactNode; //children'ın tipini tanımladık
}

//context oluştur
const languageContext = createContext({
    language: tr,//dil dosyası
    currentLanguage: "tr",//seçili dil adı
    changeLanguage: (currentLanguage:string) => { } //Dili değiştirecek fonksiyon
})
//context kullan
const useLanguageContext = () => useContext(languageContext);

function Localization({ children }: localizationProps) {

    const [language, setLanguage] = useState(tr);
    const [currentLanguage, setCurrentLanguage] = useState("tr");

    const changeLanguage = (currentLanguage: string) => {
        switch (currentLanguage) {
            case "tr":
                setLanguage(tr);
                setCurrentLanguage("tr");
                break;
            case "en":
                setLanguage(en);
                setCurrentLanguage("en");
                break;
                default:
                    setLanguage(tr);
                    setCurrentLanguage("tr");
                    break;
        }
    }

    return(
        <languageContext.Provider value={{currentLanguage,language,changeLanguage}}>
            {children}
        </languageContext.Provider>
    )

}
export {Localization,useLanguageContext}