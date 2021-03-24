import fetchProductsAction, { postTransaction } from '../../actions/ActionsCreators';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProducts, getProductsError, getProductsPending } from '../../reducers/ProductsReducer';
import { bindActionCreators } from 'redux';
import product0 from "../../assets/images/product1.jpeg";
import product1 from "../../assets/images/tablet.jpeg";
import product4 from "../../assets/images/watch.jpeg";
import product5 from "../../assets/images/tv.jpeg";
import product3 from "../../assets/images/iphone.jpeg";
import product2 from "../../assets/images/Ipad.jpeg";
import product6 from "../../assets/images/airpod.jpeg"
import "./index.css";
import getRewardsByTransaction from '../../Utility/RewardByTransactionCalculator';



class ProductView extends Component {
    constructor(props) {
        super(props);
        this.state = { gainedReward: 0, showSuccess: false, showFail: false }
        this.shouldComponentRender = this.shouldComponentRender.bind(this);
    }

    componentWillMount() {
        const { fetchProducts } = this.props;
        fetchProducts();
    }

    shouldComponentRender() {
        if (this.pending === false) return false;
        return true;
    }
    handleClickShowAlert = (() => {
        this.setState({ showSuccess: true });
        setTimeout(() => {
            this.setState({ showSuccess: false });
        }, 5000)
    });
    handleClickFailAlert = (() => {
        this.setState({ showFail: true });
        setTimeout(() => {
            this.setState({ showFail: false });
        }, 5000)
    });
    handleSubmit(product) {
        const USERAMOUNT = 1000;
        if (USERAMOUNT < product.amount) {
            this.handleClickFailAlert();
        }
        else {
            const today = new Date();
            const todayDate = today.getDate() + "-"
                + (today.getMonth() + 1) + "-" + today.getFullYear();
            const transaction = { id: "TR" + (Math.floor(Math.random() * 1000)), amount: product.amount, currency: "USD", date: todayDate }
            postTransaction(transaction);
            const gainedReward = getRewardsByTransaction(transaction);
            this.setState({ gainedReward: gainedReward });
            this.handleClickShowAlert();

        }
    }

    render() {
        const { products } = this.props;
        const images = [product0, product1, product2, product3, product4, product5, product6];
        if (!this.shouldComponentRender()) return <div>Page is Loading</div>
        return (
            <div className="container mt10">
                <div className="row">
                    <div className="col-lg-10 ml10">
                        {this.state.showSuccess ? <div className={this.state.showSuccess ? "mt5 alert alert-success alert-shown" : "alert alert-success alert-hidden"} role="alert">
                            {'Congrats! \n You gained a reward points of ' + this.state.gainedReward}
                        </div> : <></>}
                        {this.state.showFail ? <div className={this.state.showFail ? "mt5 alert alert-danger alert-shown" : "alert alert-succes salert-hidden"} role="alert">
                            {"You cannot buy a product with larger amount than available"}
                        </div> : <></>}
                        <div className="row">
                            {products?.products?.map((product, index) => (

                                <div className="col-lg-4 col-md-6 mb-4" key={product.id}>
                                    <div className="card h-100">
                                        <a href="/#"><img className="card-img-top" src={images[index]} alt=""></img></a>
                                        <div className="card-body">
                                            <h4 className="card-title">
                                                <a href="/#">{product.name}</a>
                                            </h4>
                                            <h5>$ {product.amount}</h5>
                                            <p className="card-text">{product.description}</p>
                                        </div>
                                        <div className="card-footer">
                                            <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                                            <button className="buy-button" onClick={() =>
                                                this.handleSubmit(product)}>Buy</button>
                                        </div>
                                    </div>
                                </div>
                            ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    error: getProductsError(state),
    products: getProducts(state),
    pending: getProductsPending(state)
})

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchProducts: fetchProductsAction
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductView);