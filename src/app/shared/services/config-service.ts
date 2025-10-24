import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  
loadConfig(): Promise<boolean> {
    return new Promise((resolve, reject) => {
     let fontfam =  localStorage.getItem('fontFamily');
      // console.log('Loaded font family from localStorage:', fontfam);
      if (fontfam) {
        // let fontStyle = JSON.parse(fontfam)?.fontForm?.fontStyle;
        // let buttonStyle = JSON.parse(fontfam)?.beonButton;
        let fontFam = JSON.parse(fontfam);
        let fontStyle = fontFam?.fontForm?.fontStyle;
        let buttonStyle = fontFam?.beonButton;
        let bt8 = 'buttonRadius8';let varName = '--'+bt8;
        console.log('varName:',varName);
        console.log('Parsed font family from localStorage:', fontStyle);
        console.log('Parsed button style from localStorage:', buttonStyle);
        // document.documentElement.style.setProperty('--fontFamily', fontFamily);
        let root = ` :root  { --fontFamily:${fontStyle}; } html, body {
                      font-family: ${fontStyle}} .beonButton {
                      border-radius: var(${varName});
                      background-color: ${buttonStyle?.buttonLabelColor};
                      text-transform: ${buttonStyle?.buttonLabelTextType};
                    }`;
        this.createCustomStylesRoot(root);
        console.log('Applied font family to document:', fontStyle);

      }
      resolve(true)
    });
  }

  createCustomStylesRoot(rootStyles:any) {
    const head = document.getElementsByTagName("head")[0];
    const ref = document.querySelector("style");
    const existingStyles = document.querySelectorAll("style");

    if (existingStyles.length === 0) {
      const style = document.createElement("style");
      style.id = "custom-root-styles";
      // style.async = true;
      style.type = "text/css";
      style.innerHTML = rootStyles;
      head.insertBefore(style, ref);
    } else {
      const firstStyle = existingStyles[0];
      if (firstStyle.innerHTML !== rootStyles) {
        firstStyle.innerHTML = rootStyles;
        head.insertBefore(firstStyle, ref);
      }
    }
  }

}
