import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    bgColor: string;
    headerColor: string;
    textColor: string;
    containerBoxColor: string;
    buttonColor: {
      empButton: string;
      managerButton: string;
      acceptButton: string;
      denyButton: string;
      pendingButton: string;
    };
    inputColor: {
      authColor: string;
    };
    borderColor: string;
    buttonTextColor: string;
    hoverColor: string;
    inactiveColor: string;
    activeColor: string;
  }
}
