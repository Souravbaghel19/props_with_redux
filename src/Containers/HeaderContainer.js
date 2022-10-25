import {connect} from 'react-redux'
import Header from '../Component/Header' 
import {addToCart} from '../Services/Actions/Action'

const mapStateToProps  = state=>({
         cardData:state
})
const mapDispatchToProps = dispatch=>({

    
})
export default connect(mapStateToProps,mapDispatchToProps)(Header)

//export default Home
