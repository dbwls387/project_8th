<template>
 <section class="cart-area pt-100 pb-100">
   <div class="container">
      <div class="row">
         <div class="col-12">
            <div class="table-content table-responsive">
               <table class="table">
                     <thead>
                        <tr>
                           <th class="product-thumbnail">Images</th>
                           <th class="cart-product-name">Product</th>
                           <th class="product-price">Unit Price</th>
                           <th class="product-quantity">Quantity</th>
                           <th class="product-subtotal">Total</th>
                           <th class="product-remove">Remove</th>
                        </tr>
                     </thead>
                     <tbody class="border-0">
                        <tr>
                           <td class="product-thumbnail">
                              <router-link to="/course-details">
                              <img src="../../assets/img/course/sm/cart-1.jpg" alt="">
                              </router-link>
                           </td>
                           <td class="product-name">
                              <router-link to="/course-details">Strategy law and organization Foundation </router-link>
                           </td>
                           <td class="product-price"><span class="amount">$130.00</span></td>
                           <td class="product-quantity text-center">
                              <div class="product-quantity mt-10 mb-10">
                                 <div class="product-quantity-form">
                                    <form action="#">
                                       <button class="cart-minus">
                                          <i class="far fa-minus"></i>
                                       </button>
                                       <input class="cart-input" type="text" value="1"/>
                                       <button class="cart-plus">
                                          <i class="far fa-plus"></i>
                                       </button>
                                    </form>
                                 </div>
                              </div>
                           </td>
                           <td class="product-subtotal">
                              <span class="amount">$130.00</span>
                           </td>
                           <td class="product-remove">
                              <a href="#"><i class="fa fa-times"></i></a>
                           </td>
                        </tr>
                        <tr>
                           <td class="product-thumbnail">
                              <router-link to="/course-details">
                              <img src="../../assets/img/course/sm/cart-2.jpg"  alt="">
                              </router-link>
                           </td>
                           <td class="product-name">
                              <router-link to="/course-details">Fundamentals of music theory Learn new</router-link>
                           </td>
                           <td class="product-price"><span class="amount">$120.50</span></td>
                           <td class="product-quantity text-center">
                              <div class="product-quantity mt-10 mb-10">
                                 <div class="product-quantity-form">
                                    <form action="#">
                                       <button class="cart-minus">
                                          <i class="far fa-minus"></i>
                                       </button>
                                       <input class="cart-input" type="text" value="1"/>
                                       <button class="cart-plus">
                                          <i class="far fa-plus"></i>
                                       </button>
                                    </form>
                                 </div>
                              </div>
                           </td>
                           <td class="product-subtotal">
                              <span class="amount">$120.50</span>
                           </td>
                           <td class="product-remove">
                              <a href="#"><i class="fa fa-times"></i></a>
                           </td>
                        </tr>
                     </tbody>
               </table>
            </div>
            <div class="row">
               <div class="col-12">
                     <div class="coupon-all">
                        <div class="coupon d-sm-flex align-items-center">
                           <input id="coupon_code" class="input-text" name="coupon_code" value="" placeholder="Coupon code" type="text">
                           <button class="e-btn" name="apply_coupon" 
                           type="submit">Apply coupon</button>
                        </div>
                        <div class="coupon2">
                           <button class="e-btn" name="update_cart" 
                           type="submit">Update cart</button>
                        </div>
                     </div>
               </div>
            </div>
            <div class="row">
               <div class="col-md-5 ml-auto">
                     <div class="cart-page-total">
                        <h2>Cart totals</h2>
                        <ul class="mb-20">
                           <li>Subtotal <span>$250.00</span></li>
                           <li>Total <span>$250.00</span></li>
                        </ul>
                        <router-link class="e-btn e-btn-border" to="/checkout">Proceed to checkout</router-link>
                     </div>
               </div>
            </div>
         </div>
      </div>
   </div>
 </section>
</template>

<script>
export default {
   name:'CartArea'
};
</script>

