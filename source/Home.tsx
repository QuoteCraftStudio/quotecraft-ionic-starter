import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

export default function Home() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar><IonTitle>QuoteCraft Ionic</IonTitle></IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div style={{ minHeight: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px', boxSizing: 'border-box', background: '#f5f1e8', color: '#176b61' }}>
          <h1>Hello World!</h1>
        </div>
      </IonContent>
    </IonPage>
  );
}
