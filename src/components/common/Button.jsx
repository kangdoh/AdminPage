import styled from "styled-components"
import PropTypes from 'prop-types';

const BUTTON = styled.button`
  padding: 10px 20px; 
  border: none; 
  border-radius: 5px; 
  background-color: #FFA14D; 
  color: #000; 
  font-size: 16px; 
  font-weight: bold; 
  cursor: pointer; 
  transition: background-color 0.3s ease, transform 0.3s ease;

  /* 호버 효과 */
  &:hover {
    background-color:rgb(255, 119, 0); 
    color:"#FFF"
    transform: translateY(-1px);
  }
`;

function Button({ props, onClick }) {
  Button.propTypes ={
    props: PropTypes.string,
    onClick: PropTypes.func.isRequired 
  }
  return (
    <BUTTON onClick={onClick}>{props}</BUTTON>
  )
}

export default Button