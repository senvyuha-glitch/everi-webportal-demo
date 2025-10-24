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
        console.log('Parsed font family from localStorage:', fontStyle);
        console.log('Parsed button style from localStorage:', buttonStyle);
        const classNames = Object.keys(fontFam);
        
        // document.documentElement.style.setProperty('--fontFamily', fontFamily);
        let root = ` :root  { --fontFamily:${fontStyle}; } html, body {
                      font-family: ${fontStyle}} `
         for (let i = 1; i < classNames.length; i++) {
          const className = classNames[i];    
            // gather actual property names from the fontFam entry
            const props = Object.keys(fontFam[className] || {});
            if (props.length) {
            root += `.${className} {`;
            for (const prop of props) {
              const value = fontFam[className][prop];
              // append each property: use the raw value (or wrap with var(...) if it's a CSS variable)
              root += ` ${prop}: var(${value});`;
            }
            root += ` }`;
            }
                  }
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
