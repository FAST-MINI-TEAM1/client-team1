import { styled, css } from "styled-components";

interface IButtonProps {
  [props: string]: any;
}

function Button({ ...props }: IButtonProps) {
  return <StyledButton {...props} />;
}

const StyledButton = styled.button<{
  employee?: boolean;
  admin?: boolean;
  accept?: boolean;
  deny?: boolean;
  pending?: boolean;
  delete?: boolean;
  submit?: boolean;
  annualSubmit?: boolean;
  dutySubmit?: boolean;
  cancle?: boolean;
  application?: boolean;
}>`
  border: none;
  border-radius: 10px;
  padding: 0.5rem 1rem;
  color: ${(props) => props.theme.buttonTextColor};
  outline: none;
  cursor: pointer;
  background: ${(props) => props.theme.bgColor};
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.04);
  transition: all 0.2s ease 0s;
  &:hover {
    background: ${(props) => props.theme.hoverColor};
  }

  ${(props) =>
    props.employee &&
    css`
      background: ${(props) => props.theme.buttonColor.empButton};
      border: 1px solid ${(props) => props.theme.buttonColor.empButton};
      color: ${(props) => props.theme.buttonTextColor.empColor};
      font-size: 20px;
      border-radius: 30px;
      box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
      &:hover {
        color: ${(props) => props.theme.buttonColor.empButton};
        border: 1px solid ${(props) => props.theme.buttonColor.empButton};
      }
    `}
  ${(props) =>
    props.admin &&
    css`
      background: ${(props) => props.theme.buttonColor.managerButton};
      border: 1px solid ${(props) => props.theme.buttonColor.managerButton};
      color: ${(props) => props.theme.buttonTextColor.adminColor};
      font-size: 20px;
      border-radius: 30px;
      box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
      &:hover {
        color: ${(props) => props.theme.buttonColor.managerButton};
        border: 1px solid ${(props) => props.theme.buttonColor.managerButton};
      }
    `}
  ${(props) =>
    props.accept &&
    css`
      background: ${(props) => props.theme.buttonColor.acceptButton};
      border: 1px solid ${(props) => props.theme.buttonColor.acceptButton};
      &:hover {
        color: ${(props) => props.theme.buttonColor.acceptButton};
        border: 1px solid ${(props) => props.theme.buttonColor.acceptButton};
      }
    `}
  ${(props) =>
    props.deny &&
    css`
      background: ${(props) => props.theme.buttonColor.denyButton};
      border: 1px solid ${(props) => props.theme.buttonColor.denyButton};
      &:hover {
        color: ${(props) => props.theme.buttonColor.denyButton};
        border: 1px solid ${(props) => props.theme.buttonColor.denyButton};
      }
    `}
    ${(props) =>
    props.pending &&
    css`
      background: ${(props) => props.theme.buttonColor.pendingButton};
      border: 1px solid ${(props) => props.theme.buttonColor.pendingButton};
      &:hover {
        color: ${(props) => props.theme.buttonColor.pendingButton};
        border: 1px solid ${(props) => props.theme.buttonColor.pendingButton};
      }
    `}
    ${(props) =>
    props.delete &&
    css`
      width: 457px;
      height: 49px;
      font-size: 18px;
      background: ${(props) => props.theme.pointColor.red};
      &:hover {
        color: ${(props) => props.theme.buttonColor.pendingButton};
        border: 1px solid ${(props) => props.theme.buttonColor.pendingButton};
      }
    `}
    ${(props) =>
    props.submit &&
    css`
      width: 247px;
      height: 58px;
      font-size: 16px;
      background: ${(props) => props.theme.pointColor.green};
      &:hover {
        color: ${(props) => props.theme.pointColor.green};
        border: 1px solid ${(props) => props.theme.pointColor.green};
      }
    `}
    ${(props) =>
    props.annualSubmit &&
    css`
      width: 247px;
      height: 58px;
      font-size: 16px;
      background: ${(props) => props.theme.pointColor.yellow};
      &:hover {
        color: ${(props) => props.theme.buttonColor.pendingButton};
        border: 1px solid ${(props) => props.theme.buttonColor.pendingButton};
      }
    `}
    ${(props) =>
    props.dutySubmit &&
    css`
      width: 247px;
      height: 58px;
      font-size: 16px;
      border-radius: 13px;
      background: ${(props) => props.theme.pointColor.blue};
      &:hover {
        color: ${(props) => props.theme.pointColor.blue};
        border: 1px solid ${(props) => props.theme.pointColor.blue};
      }
    `}
    ${(props) =>
    props.cancle &&
    css`
      width: 125px;
      height: 40px;
      font-size: 16px;
      border-radius: 10px;
      box-shadow: 0px 2px 4px rgba(106, 106, 106, 0.25);
      background: #fbfbfb;
      color: ${(props) => props.theme.pointColor.red};
      &:hover {
        color: ${(props) => props.theme.pointColor.rightGray};
        background: ${(props) => props.theme.pointColor.red};
      }
    `}
    ${(props) =>
    props.application &&
    css`
      width: 125px;
      height: 40px;
      font-size: 16px;
      border-radius: 10px;
      box-shadow: 0px 2px 4px rgba(106, 106, 106, 0.25);
      background: #fbfbfb;
      color: ${(props) => props.theme.pointColor.green};
      &:hover {
        color: ${(props) => props.theme.pointColor.rightGray};
        background: ${(props) => props.theme.pointColor.green};
      }
    `}
`;

export default Button;
