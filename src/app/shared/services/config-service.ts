import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  
  loadConfig(): Promise<boolean> {
    return new Promise((resolve, reject) => {
     let fontfam =  localStorage.getItem('fontFamily');
      console.log('Loaded font family from localStorage:', fontfam);
      if (fontfam) {
        const fontFamily = JSON.parse(fontfam).fontStyle;
        // document.documentElement.style.setProperty('--fontFamily', fontFamily);
        let root = ` :root  { --fontFamily:${fontFamily}; } html, body {
  font-family: ${fontFamily}}`;
        this.createCustomStylesRoot(root);
        console.log('Applied font family to document:', fontFamily);
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
