import { LogoComponent } from "components/Logo";
import { Content } from "./styles";

export function HeaderComponent() {
  return (
    <Content>
      <div className="container">
        <LogoComponent />
      </div>
    </Content>
  );
}
