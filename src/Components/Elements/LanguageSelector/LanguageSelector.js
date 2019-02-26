import React from "react";
import { withLocalize } from "react-localize-redux";
import getImageLanguage from "../../../Resources/Translations/compilerLanguageImages.js"; 
import { Image,Dropdown } from "react-bootstrap";
import { withCookies } from 'react-cookie';
const LanguageSelector = ({ languages, app, setActiveLanguage, cookies }) => (
    
<Dropdown>
   <Dropdown.Toggle id="dropdown-custom-1"><Image src={getImageLanguage(cookies.get("folyou_language"))} style={{width:"25px",height:"25px"}}></Image></Dropdown.Toggle>
    <Dropdown.Menu className="super-colors">
    {languages.map(lang => (
        <Dropdown.Item key={lang.code} onClick={() =>{ setActiveLanguage(lang.code); app.changeCurrentLanguage(lang.code,lang.name)}}>
            <Image src={getImageLanguage(lang.code)} style={{width:"25px",height:"25px",marginRight:"10px"}}></Image> 
            {lang.name}   
        </Dropdown.Item>
    ))}
    </Dropdown.Menu>
</Dropdown>
  
);

export default withCookies(withLocalize(LanguageSelector));
