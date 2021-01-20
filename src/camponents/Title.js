// props = propiedades que se pasaran  a la funcion

function Title(props) {
    const {texto} = props;
    return(<h3>{texto}</h3>)
}

export default Title;