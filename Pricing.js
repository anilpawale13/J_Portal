import React from "react";
import {Link} from 'react-router-dom';
const Pricing = () => {

    return (
    <div>
       

		{/* <!--Breadcrumb--> */}
		<section>
			<div class="bannerimg cover-image bg-background3" data-image-src="../assets/images/banners/banner2.jpg">
				<div class="header-text mb-0">
					<div class="container">
						<div class="text-center text-white">
							<h1 class="">Pricing</h1>
							<ol class="breadcrumb text-center">
								<li class="breadcrumb-item"><Link to="#">Home</Link></li>
								<li class="breadcrumb-item"><Link to="#">Pages</Link></li>
								<li class="breadcrumb-item active text-white" aria-current="page">Register</li>
							</ol>
						</div>
					</div>
				</div>
			</div>
		</section>
		{/* <!--/Breadcrumb--> */}

		<div class="sptb">
			<div class="container">
				<div class="row">
					<div class="col-xl-3 col-md-6 col-sm-12 col-lg-3">
						<div class="pricingTable2 primary">
							<div class="pricingTable2-header">
								<h3>Free</h3>
								<span>Lorem ipsum dolor</span>
							</div>
							<div class="pricing-plans">
								<span class="price-value1"><i class="fa fa-usd"></i><span>0.00</span></span>
								<span class="month">/month</span>
							</div>
							<div class="pricingContent2">
								<ul>
									<li><b>Free</b> Ad posting</li>
									<li><b>0</b> Featured Classes</li>
									<li><b>100%</b> Secure</li>
									<li><b>Custome</b> Reviews</li>
									<li><b>24/7</b> Support</li>
								</ul>
							</div>
                            {/* <!-- CONTENT BOX--> */}
							<div class="pricingTable2-sign-up">
								<Link to="/register" class="btn btn-block btn-primary">sign up</Link>
							</div>
                            {/* <!-- BUTTON BOX--> */}
						</div>
					</div>
					<div class="col-xl-3 col-md-6 col-sm-12 col-lg-3">
						<div class="pricingTable2 orange">
							<div class="pricingTable2-header">
								<h3>Premium</h3>
								<span>Lorem ipsum dolor</span>
							</div>
							<div class="pricing-plans">
								<span class="price-value1"><i class="fa fa-usd"></i><span>19</span></span>
								<span class="month">/month</span>
							</div>
							<div class="pricingContent2">
								<ul>
									<li><b>Featured</b> Ad posting</li>
									<li><b>20</b> Featured Classes</li>
									<li><b>100%</b> Secure</li>
									<li><b>Custome</b> Reviews</li>
									<li><b>24/7</b> Support</li>
								</ul>
							</div>
                            {/* <!-- CONTENT BOX--> */}
							<div class="pricingTable2-sign-up">
								<Link to="/register" class="btn btn-block btn-secondary">sign up</Link>
							</div>
                            {/* <!-- BUTTON BOX--> */}
						</div>
					</div>
					<div class="col-xl-3 col-md-6 col-sm-12 col-lg-3">
						<div class="pricingTable2 green">
							<div class="pricingTable2-header">
								<h3>Silver</h3>
								<span>Lorem ipsum dolor</span>
							</div>
							<div class="pricing-plans">
								<span class="price-value1"><i class="fa fa-usd"></i><span>67</span></span>
								<span class="month">/month</span>
							</div>
							<div class="pricingContent2">
								<ul>
									<li><b>Featured</b> Ad posting</li>
									<li><b>30</b> Featured Classes</li>
									<li><b>100%</b> Secure</li>
									<li><b>Custome</b> Reviews</li>
									<li><b>24/7</b> Support</li>
								</ul>
							</div>
                            {/* <!-- CONTENT BOX--> */}
							<div class="pricingTable2-sign-up">
								<Link to="/register" class="btn btn-block btn-success">sign up</Link>
							</div>
                            {/* <!-- BUTTON BOX--> */}
						</div>
					</div>
					<div class="col-xl-3 col-md-6 col-sm-12 col-lg-3">
						<div class="pricingTable2 info">
							<div class="pricingTable2-header">
								<h3>Gold</h3>
								<span>Lorem ipsum dolor</span>
							</div>
							<div class="pricing-plans">
								<span class="price-value1"><i class="fa fa-usd"></i><span>78</span></span>
								<span class="month">/month</span>
							</div>
							<div class="pricingContent2">
								<ul>
									<li><b>Featured</b> Ad posting</li>
									<li><b>40</b> Featured Classes</li>
									<li><b>100%</b> Secure</li>
									<li><b>Custome</b> Reviews</li>
									<li><b>24/7</b> Support</li>
								</ul>
							</div>
                            {/* <!-- CONTENT BOX--> */}
							<div class="pricingTable2-sign-up">
								<Link to="/register" class="btn btn-block btn-info">sign up</Link>
							</div>
                            {/* <!-- BUTTON BOX--> */}
						</div>
					</div>
				</div>
			</div>
		</div>
		{/* <!--/Pricing Tables 1--> */}

		{/* <!--Pricing Tables 2--> */}
		<section class="sptb bg-white">
			<div class="container">
				<div class="section-title center-block text-center">
					<h2>Another Pricing</h2>
					<p>Mauris ut cursus nunc. Morbi eleifend, ligula at consectetur vehicula</p>
				</div>
				<div class="container">
					<div class="row">
						<div class="col-md-12 col-lg-4 col-xl-4 col-sm-12">
							<div class="pricingTable">
								<div class="price-value">$0.0
									<span class="month">Monthly</span>
								</div>
								<h3 class="title">Business</h3>
								<ul class="pricing-content">
									<li><strong>4</strong> Ads</li>
									<li><i class="fe fe-check text-success mr-2"></i> 30 days</li>
									<li><i class="fe fe-x text-danger mr-2"></i> Private Messages</li>
									<li><i class="fe fe-x text-danger mr-2"></i> Urgent Ads</li>
								</ul>
								<Link to="#" class="pricingTable-signup">Choose plan</Link>
							</div>
						</div>

						<div class="col-md-12 col-lg-4 col-xl-4 col-sm-12">
							<div class="pricingTable advance-pricing">
								<div class="price-value">$65
									<span class="month">Monthly</span>
								</div>
								<h3 class="title">Standard</h3>
								<ul class="pricing-content">
									<li>
										<strong>50</strong> Ads
									</li>
									<li>
										<i class="fe fe-check text-success mr-2"></i> 60 Days
									</li>
									<li>
										<i class="fe fe-x text-danger mr-2"></i> Private Messages
									</li>
									<li>
										<i class="fe fe-x text-danger mr-2"></i> Urgent ads
									</li>
								</ul>
								<Link to="#" class="pricingTable-signup">Choose plan</Link>
							</div>
						</div>

						<div class="col-md-12 col-lg-4 col-xl-4 col-sm-12">
							<div class="pricingTable">
								<div class="price-value">$100
									<span class="month">Monthly</span>
								</div>
								<h3 class="title">Premium</h3>
								<ul class="pricing-content">
									<li>
										<strong>100</strong> Ads
									</li>
									<li>
										<i class="fe fe-check text-success mr-2"></i> 180 days
									</li>
									<li>
										<i class="fe fe-check text-success mr-2"></i> Private Messages
									</li>
									<li>
										<i class="fe fe-x text-danger mr-2"></i> Urgent ads
									</li>
								</ul>
								<Link to="#" class="pricingTable-signup">Choose plan</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		{/* <!--Pricing Tables 2--> */}

	
    </div>
    );
}

export default Pricing;