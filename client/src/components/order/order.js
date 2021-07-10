import React from 'react'; 
import { connect } from 'react-redux';
import { orderProduct} from '../../actions';
import { Link } from 'react-router-dom';
import './order.css';

function Order (props) {
  return (
    <div id='OrderingAndFiltering'>
        <div className='Ordering'>
          <button className='DropdownButton'>Order</button>
          <div className='Orders'>
            <button onClick={(e) => {e.preventDefault(); props.order('')}}>default</button>
            <button onClick={(e) => {e.preventDefault(); props.order('asc')}}>A - Z</button>
            <button onClick={(e) => {e.preventDefault(); props.order('dsc')}}>Z - A</button>
            <button onClick={(e) => {e.preventDefault(); props.order('price')}}>max price</button>
            <button onClick={(e) => {e.preventDefault(); props.order('price')}}>min price</button>
          </div>
        </div>
        <div className='Filtering'>
          <button className='DropdownButton'>Filter</button>
          <div className='Filters'>
          {/* <button onClick={(e) => {e.preventDefault(); props.order('')}}>CleanFilter</button> */}
            <button onClick={(e) => { e.preventDefault(); props.filter('');}}>Clean Filters</button>
            {props.orderProd.map(d => <button key={d}
              onClick={(e) => {e.preventDefault(); props.filter(d)}}>{d}</button>)}
          </div>
        </div>
        <div>
          <button className='DropdownButton'
            onClick={(e) => { e.preventDefault(); orderProduct(''); props.filter(); }}>
            <Link to='/home' className='Link'>Clear Search</Link>
            </button>
        </div>
      </div>
  )
}

function mapStateToProps(state) {
  return {
    orderProd: state.orderProd,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    orderProduct: (data) => dispatch(orderProduct(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Order)