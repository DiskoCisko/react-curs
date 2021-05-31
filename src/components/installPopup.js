import React from 'react';



class InstallPopup extends React.Component {
   state = {
       isShown: false,
   };

   componentDidMount() {
       // Определяем, является ли устройство iPhone-ом
       const isIos = () => {
           const userAgent = window.navigator.userAgent.toLowerCase();
           return /iphone/.test( userAgent );
       };
       // Определяем, запущено ли приложение отдельно
       const isInStandaloneMode = () => ('standalone' in window.navigator) && (window.navigator.standalone);

       // Решаем, показать или не показать уведомление об установке:
       if (isIos() && !isInStandaloneMode()) {
           this.handleShow();
       }
   }

   handleShow = () => {
       this.setState({ isShown: true });
   };

   handleHide = () => {
       this.setState({ isShown: false });
   };

   render() {
       return (
           <div style={ { display: this.state.isShown ? 'block' : 'none' } } className="speech-bubble-container">
               <div className="speech-bubble">
                   <button className="close-install-message-icon" onClick={ this.handleHide }>X</button>
                   Установи приложение на свой iPhone: нажми «Поделиться», а затем на экран «Домой»
               </div>
           </div>
       );
   }
}

export default InstallPopup;