import { Component } from "react";
import BubbleAlert from './BubbleAlert'
import DetallesCarro from './DetallesCarro'

const styles = {
    carro: {
        backgroundColor: '#359A2C',
        color: '#fff',
        border: 'none',
        padding: '15px',
        borderRadius: '15px',
        cursor: 'pointer'
    }
}
class Carro extends Component {
    render() {
        const { carro, esCarroVisible, mostrarCarro } = this.props
        const cantidad =carro.reduce((acc, el) => acc + el.cantidad, 0)
        return (
            <div>
                {cantidad !==0 
                    ? <BubbleAlert value={cantidad}/>
                : null }
                <button onClick={mostrarCarro} style={styles.carro}>
                    Carro
                </button>
                {esCarroVisible ? <DetallesCarro carro={carro}/> : null}
            </div>
        )
    }
}

export default Carro