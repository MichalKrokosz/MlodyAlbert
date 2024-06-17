import Content from "./components/content/content"

export default function NotFound() {
  return (
    <Content>
      <div style={{padding: "50px 0"}}>
        <h1 style={{textAlign: "center"}}><strong>UPS!</strong> Nie znaleziono twojej strony</h1>
        <h4 style={{textAlign: "center"}}>Przejdz do strony głownej albo cofnij się</h4>
      </div>
    </Content>
  )
}
