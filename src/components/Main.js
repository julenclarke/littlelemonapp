import { Button } from '@chakra-ui/react'

function Main() {
    return (
        <main>
            <section className="intro">
                <div className="text">
                    <h1>Little Lemon</h1>
                    <h2>Donostia</h2>
                    <p>We are a family owned Basque restaurant, focused on traditional recipes served with a modern twist.<br/><br/>Have a taste of the best Donostiarra pintxos in town.</p>
                    <div>
                        <Button className='button' size='lg'>
                            Reserve a table
                        </Button>
                    </div>
                </div>
                <div className="food">
                    <img width={300} src={require("../assets/restaurantfood.jpg")} alt="Restaurant food" />
                </div>
            </section>
            <section className="menu">
                <h1>This week's specials!</h1>
                <div className="menu-button">
                    <Button className='button' size='lg'>
                        Online Menu
                    </Button>
                </div>
                <div className="dish1">
                    <img width={300} src={require("../assets/greek salad.jpg")} alt="Greek Salad" />
                    <div className='name'>
                        <h3>Greek Salad</h3>
                        <p id="price">12.99€</p>
                    </div>
                    <p id="description">The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                    <div className="order"><a href='http://localhost:3000/'>Order a delivery  🛵</a></div>
                </div>
                <div className="dish2">
                    <img width={300} src={require("../assets/bruschetta.png")} alt="Bruschetta" />
                    <div className='name'>
                        <h3>Bruschetta</h3>
                        <p id="price">5.99€</p>
                    </div>
                    <p id="description">Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
                    <div className="order"><a href='http://localhost:3000/'>Order a delivery  🛵</a></div>
                </div>
                <div className="dish3">
                    <img width={300} src={require("../assets/lemon dessert.jpg")} alt="Lemon Dessert" />
                    <div className='name'>
                        <h3>Lemon Dessert</h3>
                        <p id="price">5.00€</p>
                    </div>
                    <p id="description">This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                    <div className="order"><a href='http://localhost:3000/'>Order a delivery  🛵</a></div>
                </div>
            </section>
            <section className="testimonials">
                <h1>Testimonials</h1>
                <div className="testimonial1">
                    <div id="stars">
                        <svg width="75" height="13" viewBox="0 0 298 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_1_2)">
                                <path d="M82.0917 9.8449C85.1 4.44831 86.6041 1.75 88.8529 1.75C91.1018 1.75 92.6059 4.44829 95.6141 9.84488L96.3924 11.241C97.2474 12.7746 97.6746 13.5414 98.3413 14.0473C99.0077 14.5532 99.8376 14.741 101.498 15.1166L103.009 15.4586C108.851 16.7803 111.772 17.4412 112.467 19.6759C113.162 21.9104 111.17 24.2391 107.188 28.896L106.157 30.1008C105.026 31.4242 104.46 32.0859 104.205 32.9045C103.951 33.7232 104.036 34.606 104.207 36.3718L104.363 37.9792C104.965 44.1927 105.266 47.2994 103.447 48.6805C101.628 50.0615 98.8928 48.8023 93.4232 46.2841L92.0081 45.6324C90.4539 44.9168 89.6768 44.5589 88.8529 44.5589C88.0291 44.5589 87.252 44.9168 85.6978 45.6324L84.2827 46.2841C78.8131 48.8023 76.0782 50.0615 74.2589 48.6805C72.4396 47.2994 72.7407 44.1927 73.3428 37.9792L73.4985 36.3718C73.6696 34.606 73.7552 33.7232 73.5006 32.9045C73.2461 32.0859 72.6802 31.4242 71.5485 30.1008L70.5182 28.896C66.5357 24.2391 64.5444 21.9104 65.2393 19.6759C65.9342 17.4412 68.8551 16.7803 74.6968 15.4586L76.2082 15.1166C77.8682 14.741 78.6982 14.5532 79.3647 14.0473C80.0311 13.5414 80.4586 12.7746 81.3134 11.241L82.0917 9.8449Z" fill="#333333"/>
                                <path d="M21.7388 9.8449C24.747 4.44831 26.2511 1.75 28.5 1.75C30.7489 1.75 32.253 4.44829 35.2612 9.84488L36.0394 11.241C36.8944 12.7746 37.3217 13.5414 37.9884 14.0473C38.6548 14.5532 39.4846 14.741 41.1447 15.1166L42.6562 15.4586C48.4977 16.7803 51.4188 17.4412 52.1137 19.6759C52.8086 21.9104 50.8174 24.2391 46.8348 28.896L45.8045 30.1008C44.6728 31.4242 44.1068 32.0859 43.8522 32.9045C43.5979 33.7232 43.6834 34.606 43.8544 36.3718L44.0102 37.9792C44.6122 44.1927 44.9134 47.2994 43.0941 48.6805C41.2747 50.0615 38.5398 48.8023 33.0702 46.2841L31.6552 45.6324C30.101 44.9168 29.3239 44.5589 28.5 44.5589C27.6761 44.5589 26.899 44.9168 25.3448 45.6324L23.9298 46.2841C18.4601 48.8023 15.7253 50.0615 13.906 48.6805C12.0867 47.2994 12.3877 44.1927 12.9898 37.9792L13.1456 36.3718C13.3167 34.606 13.4022 33.7232 13.1477 32.9045C12.8931 32.0859 12.3273 31.4242 11.1956 30.1008L10.1652 28.896C6.18272 24.2391 4.19145 21.9104 4.88638 19.6759C5.5813 17.4412 8.50217 16.7803 14.3439 15.4586L15.8552 15.1166C17.5153 14.741 18.3453 14.5532 19.0117 14.0473C19.6782 13.5414 20.1056 12.7746 20.9605 11.241L21.7388 9.8449Z" fill="#333333"/>
                                <path d="M142.445 9.8449C145.453 4.44831 146.957 1.75 149.206 1.75C151.455 1.75 152.959 4.44829 155.967 9.84488L156.745 11.241C157.6 12.7746 158.028 13.5414 158.694 14.0473C159.361 14.5532 160.19 14.741 161.851 15.1166L163.362 15.4586C169.204 16.7803 172.125 17.4412 172.82 19.6759C173.514 21.9104 171.523 24.2391 167.541 28.896L166.51 30.1008C165.379 31.4242 164.813 32.0859 164.558 32.9045C164.304 33.7232 164.389 34.606 164.56 36.3718L164.716 37.9792C165.318 44.1927 165.619 47.2994 163.8 48.6805C161.981 50.0615 159.246 48.8023 153.776 46.2841L152.361 45.6324C150.807 44.9168 150.03 44.5589 149.206 44.5589C148.382 44.5589 147.605 44.9168 146.051 45.6324L144.636 46.2841C139.166 48.8023 136.431 50.0615 134.612 48.6805C132.793 47.2994 133.094 44.1927 133.696 37.9792L133.851 36.3718C134.023 34.606 134.108 33.7232 133.854 32.9045C133.599 32.0859 133.033 31.4242 131.901 30.1008L130.871 28.896C126.889 24.2391 124.897 21.9104 125.592 19.6759C126.287 17.4412 129.208 16.7803 135.05 15.4586L136.561 15.1166C138.221 14.741 139.051 14.5532 139.718 14.0473C140.384 13.5414 140.812 12.7746 141.666 11.241L142.445 9.8449Z" fill="#333333"/>
                                <path d="M202.798 9.8449C205.806 4.44831 207.31 1.75 209.559 1.75C211.808 1.75 213.312 4.44829 216.32 9.84488L217.098 11.241C217.953 12.7746 218.381 13.5414 219.047 14.0473C219.714 14.5532 220.543 14.741 222.204 15.1166L223.715 15.4586C229.557 16.7803 232.478 17.4412 233.173 19.6759C233.867 21.9104 231.876 24.2391 227.894 28.896L226.863 30.1008C225.732 31.4242 225.166 32.0859 224.911 32.9045C224.657 33.7232 224.742 34.606 224.913 36.3718L225.069 37.9792C225.671 44.1927 225.972 47.2994 224.153 48.6805C222.333 50.0615 219.599 48.8023 214.129 46.2841L212.714 45.6324C211.16 44.9168 210.383 44.5589 209.559 44.5589C208.735 44.5589 207.958 44.9168 206.404 45.6324L204.989 46.2841C199.519 48.8023 196.784 50.0615 194.965 48.6805C193.145 47.2994 193.447 44.1927 194.049 37.9792L194.204 36.3718C194.376 34.606 194.461 33.7232 194.206 32.9045C193.952 32.0859 193.386 31.4242 192.254 30.1008L191.224 28.896C187.242 24.2391 185.25 21.9104 185.945 19.6759C186.64 17.4412 189.561 16.7803 195.403 15.4586L196.914 15.1166C198.574 14.741 199.404 14.5532 200.071 14.0473C200.737 13.5414 201.164 12.7746 202.019 11.241L202.798 9.8449Z" fill="#333333"/>
                                <path d="M263.151 9.8449C266.159 4.44831 267.663 1.75 269.912 1.75C272.161 1.75 273.665 4.44829 276.673 9.84488L277.451 11.241C278.306 12.7746 278.733 13.5414 279.4 14.0473C280.067 14.5532 280.896 14.741 282.556 15.1166L284.068 15.4586C289.909 16.7803 292.831 17.4412 293.525 19.6759C294.22 21.9104 292.229 24.2391 288.247 28.896L287.216 30.1008C286.085 31.4242 285.519 32.0859 285.264 32.9045C285.01 33.7232 285.095 34.606 285.266 36.3718L285.422 37.9792C286.024 44.1927 286.325 47.2994 284.506 48.6805C282.686 50.0615 279.952 48.8023 274.482 46.2841L273.067 45.6324C271.513 44.9168 270.736 44.5589 269.912 44.5589C269.088 44.5589 268.311 44.9168 266.757 45.6324L265.342 46.2841C259.872 48.8023 257.137 50.0615 255.318 48.6805C253.498 47.2994 253.799 44.1927 254.402 37.9792L254.557 36.3718C254.728 34.606 254.814 33.7232 254.559 32.9045C254.305 32.0859 253.739 31.4242 252.607 30.1008L251.577 28.896C247.594 24.2391 245.603 21.9104 246.298 19.6759C246.993 17.4412 249.914 16.7803 255.756 15.4586L257.267 15.1166C258.927 14.741 259.757 14.5532 260.423 14.0473C261.09 13.5414 261.517 12.7746 262.372 11.241L263.151 9.8449Z" fill="#333333"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_1_2">
                                    <rect width="298" height="50" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <div className="pic">
                        <img width={50} src={require("../assets/amandacrew.jpeg")} alt="Amanda" />
                    </div>
                    <h3>Amanda</h3>
                    <div className="description">
                        <p>Delicious food!</p>
                    </div>
                </div>
                <div className="testimonial2">
                    <div id="stars">
                        <svg width="75" height="13" viewBox="0 0 298 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_1_2)">
                                <path d="M82.0917 9.8449C85.1 4.44831 86.6041 1.75 88.8529 1.75C91.1018 1.75 92.6059 4.44829 95.6141 9.84488L96.3924 11.241C97.2474 12.7746 97.6746 13.5414 98.3413 14.0473C99.0077 14.5532 99.8376 14.741 101.498 15.1166L103.009 15.4586C108.851 16.7803 111.772 17.4412 112.467 19.6759C113.162 21.9104 111.17 24.2391 107.188 28.896L106.157 30.1008C105.026 31.4242 104.46 32.0859 104.205 32.9045C103.951 33.7232 104.036 34.606 104.207 36.3718L104.363 37.9792C104.965 44.1927 105.266 47.2994 103.447 48.6805C101.628 50.0615 98.8928 48.8023 93.4232 46.2841L92.0081 45.6324C90.4539 44.9168 89.6768 44.5589 88.8529 44.5589C88.0291 44.5589 87.252 44.9168 85.6978 45.6324L84.2827 46.2841C78.8131 48.8023 76.0782 50.0615 74.2589 48.6805C72.4396 47.2994 72.7407 44.1927 73.3428 37.9792L73.4985 36.3718C73.6696 34.606 73.7552 33.7232 73.5006 32.9045C73.2461 32.0859 72.6802 31.4242 71.5485 30.1008L70.5182 28.896C66.5357 24.2391 64.5444 21.9104 65.2393 19.6759C65.9342 17.4412 68.8551 16.7803 74.6968 15.4586L76.2082 15.1166C77.8682 14.741 78.6982 14.5532 79.3647 14.0473C80.0311 13.5414 80.4586 12.7746 81.3134 11.241L82.0917 9.8449Z" fill="#333333"/>
                                <path d="M21.7388 9.8449C24.747 4.44831 26.2511 1.75 28.5 1.75C30.7489 1.75 32.253 4.44829 35.2612 9.84488L36.0394 11.241C36.8944 12.7746 37.3217 13.5414 37.9884 14.0473C38.6548 14.5532 39.4846 14.741 41.1447 15.1166L42.6562 15.4586C48.4977 16.7803 51.4188 17.4412 52.1137 19.6759C52.8086 21.9104 50.8174 24.2391 46.8348 28.896L45.8045 30.1008C44.6728 31.4242 44.1068 32.0859 43.8522 32.9045C43.5979 33.7232 43.6834 34.606 43.8544 36.3718L44.0102 37.9792C44.6122 44.1927 44.9134 47.2994 43.0941 48.6805C41.2747 50.0615 38.5398 48.8023 33.0702 46.2841L31.6552 45.6324C30.101 44.9168 29.3239 44.5589 28.5 44.5589C27.6761 44.5589 26.899 44.9168 25.3448 45.6324L23.9298 46.2841C18.4601 48.8023 15.7253 50.0615 13.906 48.6805C12.0867 47.2994 12.3877 44.1927 12.9898 37.9792L13.1456 36.3718C13.3167 34.606 13.4022 33.7232 13.1477 32.9045C12.8931 32.0859 12.3273 31.4242 11.1956 30.1008L10.1652 28.896C6.18272 24.2391 4.19145 21.9104 4.88638 19.6759C5.5813 17.4412 8.50217 16.7803 14.3439 15.4586L15.8552 15.1166C17.5153 14.741 18.3453 14.5532 19.0117 14.0473C19.6782 13.5414 20.1056 12.7746 20.9605 11.241L21.7388 9.8449Z" fill="#333333"/>
                                <path d="M142.445 9.8449C145.453 4.44831 146.957 1.75 149.206 1.75C151.455 1.75 152.959 4.44829 155.967 9.84488L156.745 11.241C157.6 12.7746 158.028 13.5414 158.694 14.0473C159.361 14.5532 160.19 14.741 161.851 15.1166L163.362 15.4586C169.204 16.7803 172.125 17.4412 172.82 19.6759C173.514 21.9104 171.523 24.2391 167.541 28.896L166.51 30.1008C165.379 31.4242 164.813 32.0859 164.558 32.9045C164.304 33.7232 164.389 34.606 164.56 36.3718L164.716 37.9792C165.318 44.1927 165.619 47.2994 163.8 48.6805C161.981 50.0615 159.246 48.8023 153.776 46.2841L152.361 45.6324C150.807 44.9168 150.03 44.5589 149.206 44.5589C148.382 44.5589 147.605 44.9168 146.051 45.6324L144.636 46.2841C139.166 48.8023 136.431 50.0615 134.612 48.6805C132.793 47.2994 133.094 44.1927 133.696 37.9792L133.851 36.3718C134.023 34.606 134.108 33.7232 133.854 32.9045C133.599 32.0859 133.033 31.4242 131.901 30.1008L130.871 28.896C126.889 24.2391 124.897 21.9104 125.592 19.6759C126.287 17.4412 129.208 16.7803 135.05 15.4586L136.561 15.1166C138.221 14.741 139.051 14.5532 139.718 14.0473C140.384 13.5414 140.812 12.7746 141.666 11.241L142.445 9.8449Z" fill="#333333"/>
                                <path d="M202.798 9.8449C205.806 4.44831 207.31 1.75 209.559 1.75C211.808 1.75 213.312 4.44829 216.32 9.84488L217.098 11.241C217.953 12.7746 218.381 13.5414 219.047 14.0473C219.714 14.5532 220.543 14.741 222.204 15.1166L223.715 15.4586C229.557 16.7803 232.478 17.4412 233.173 19.6759C233.867 21.9104 231.876 24.2391 227.894 28.896L226.863 30.1008C225.732 31.4242 225.166 32.0859 224.911 32.9045C224.657 33.7232 224.742 34.606 224.913 36.3718L225.069 37.9792C225.671 44.1927 225.972 47.2994 224.153 48.6805C222.333 50.0615 219.599 48.8023 214.129 46.2841L212.714 45.6324C211.16 44.9168 210.383 44.5589 209.559 44.5589C208.735 44.5589 207.958 44.9168 206.404 45.6324L204.989 46.2841C199.519 48.8023 196.784 50.0615 194.965 48.6805C193.145 47.2994 193.447 44.1927 194.049 37.9792L194.204 36.3718C194.376 34.606 194.461 33.7232 194.206 32.9045C193.952 32.0859 193.386 31.4242 192.254 30.1008L191.224 28.896C187.242 24.2391 185.25 21.9104 185.945 19.6759C186.64 17.4412 189.561 16.7803 195.403 15.4586L196.914 15.1166C198.574 14.741 199.404 14.5532 200.071 14.0473C200.737 13.5414 201.164 12.7746 202.019 11.241L202.798 9.8449Z" fill="#333333"/>
                                <path d="M263.151 9.8449C266.159 4.44831 267.663 1.75 269.912 1.75C272.161 1.75 273.665 4.44829 276.673 9.84488L277.451 11.241C278.306 12.7746 278.733 13.5414 279.4 14.0473C280.067 14.5532 280.896 14.741 282.556 15.1166L284.068 15.4586C289.909 16.7803 292.831 17.4412 293.525 19.6759C294.22 21.9104 292.229 24.2391 288.247 28.896L287.216 30.1008C286.085 31.4242 285.519 32.0859 285.264 32.9045C285.01 33.7232 285.095 34.606 285.266 36.3718L285.422 37.9792C286.024 44.1927 286.325 47.2994 284.506 48.6805C282.686 50.0615 279.952 48.8023 274.482 46.2841L273.067 45.6324C271.513 44.9168 270.736 44.5589 269.912 44.5589C269.088 44.5589 268.311 44.9168 266.757 45.6324L265.342 46.2841C259.872 48.8023 257.137 50.0615 255.318 48.6805C253.498 47.2994 253.799 44.1927 254.402 37.9792L254.557 36.3718C254.728 34.606 254.814 33.7232 254.559 32.9045C254.305 32.0859 253.739 31.4242 252.607 30.1008L251.577 28.896C247.594 24.2391 245.603 21.9104 246.298 19.6759C246.993 17.4412 249.914 16.7803 255.756 15.4586L257.267 15.1166C258.927 14.741 259.757 14.5532 260.423 14.0473C261.09 13.5414 261.517 12.7746 262.372 11.241L263.151 9.8449Z" fill="#333333"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_1_2">
                                    <rect width="298" height="50" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <div className="pic">
                        <img width={50} src={require("../assets/amandacrew.jpeg")} alt="Amanda" />
                    </div>
                    <h3>Amanda</h3>
                    <div className="description">
                        <p>Delicious food!</p>
                    </div>
                </div>
                <div className="testimonial3">
                    <div id="stars">
                        <svg width="75" height="13" viewBox="0 0 298 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_1_2)">
                                <path d="M82.0917 9.8449C85.1 4.44831 86.6041 1.75 88.8529 1.75C91.1018 1.75 92.6059 4.44829 95.6141 9.84488L96.3924 11.241C97.2474 12.7746 97.6746 13.5414 98.3413 14.0473C99.0077 14.5532 99.8376 14.741 101.498 15.1166L103.009 15.4586C108.851 16.7803 111.772 17.4412 112.467 19.6759C113.162 21.9104 111.17 24.2391 107.188 28.896L106.157 30.1008C105.026 31.4242 104.46 32.0859 104.205 32.9045C103.951 33.7232 104.036 34.606 104.207 36.3718L104.363 37.9792C104.965 44.1927 105.266 47.2994 103.447 48.6805C101.628 50.0615 98.8928 48.8023 93.4232 46.2841L92.0081 45.6324C90.4539 44.9168 89.6768 44.5589 88.8529 44.5589C88.0291 44.5589 87.252 44.9168 85.6978 45.6324L84.2827 46.2841C78.8131 48.8023 76.0782 50.0615 74.2589 48.6805C72.4396 47.2994 72.7407 44.1927 73.3428 37.9792L73.4985 36.3718C73.6696 34.606 73.7552 33.7232 73.5006 32.9045C73.2461 32.0859 72.6802 31.4242 71.5485 30.1008L70.5182 28.896C66.5357 24.2391 64.5444 21.9104 65.2393 19.6759C65.9342 17.4412 68.8551 16.7803 74.6968 15.4586L76.2082 15.1166C77.8682 14.741 78.6982 14.5532 79.3647 14.0473C80.0311 13.5414 80.4586 12.7746 81.3134 11.241L82.0917 9.8449Z" fill="#333333"/>
                                <path d="M21.7388 9.8449C24.747 4.44831 26.2511 1.75 28.5 1.75C30.7489 1.75 32.253 4.44829 35.2612 9.84488L36.0394 11.241C36.8944 12.7746 37.3217 13.5414 37.9884 14.0473C38.6548 14.5532 39.4846 14.741 41.1447 15.1166L42.6562 15.4586C48.4977 16.7803 51.4188 17.4412 52.1137 19.6759C52.8086 21.9104 50.8174 24.2391 46.8348 28.896L45.8045 30.1008C44.6728 31.4242 44.1068 32.0859 43.8522 32.9045C43.5979 33.7232 43.6834 34.606 43.8544 36.3718L44.0102 37.9792C44.6122 44.1927 44.9134 47.2994 43.0941 48.6805C41.2747 50.0615 38.5398 48.8023 33.0702 46.2841L31.6552 45.6324C30.101 44.9168 29.3239 44.5589 28.5 44.5589C27.6761 44.5589 26.899 44.9168 25.3448 45.6324L23.9298 46.2841C18.4601 48.8023 15.7253 50.0615 13.906 48.6805C12.0867 47.2994 12.3877 44.1927 12.9898 37.9792L13.1456 36.3718C13.3167 34.606 13.4022 33.7232 13.1477 32.9045C12.8931 32.0859 12.3273 31.4242 11.1956 30.1008L10.1652 28.896C6.18272 24.2391 4.19145 21.9104 4.88638 19.6759C5.5813 17.4412 8.50217 16.7803 14.3439 15.4586L15.8552 15.1166C17.5153 14.741 18.3453 14.5532 19.0117 14.0473C19.6782 13.5414 20.1056 12.7746 20.9605 11.241L21.7388 9.8449Z" fill="#333333"/>
                                <path d="M142.445 9.8449C145.453 4.44831 146.957 1.75 149.206 1.75C151.455 1.75 152.959 4.44829 155.967 9.84488L156.745 11.241C157.6 12.7746 158.028 13.5414 158.694 14.0473C159.361 14.5532 160.19 14.741 161.851 15.1166L163.362 15.4586C169.204 16.7803 172.125 17.4412 172.82 19.6759C173.514 21.9104 171.523 24.2391 167.541 28.896L166.51 30.1008C165.379 31.4242 164.813 32.0859 164.558 32.9045C164.304 33.7232 164.389 34.606 164.56 36.3718L164.716 37.9792C165.318 44.1927 165.619 47.2994 163.8 48.6805C161.981 50.0615 159.246 48.8023 153.776 46.2841L152.361 45.6324C150.807 44.9168 150.03 44.5589 149.206 44.5589C148.382 44.5589 147.605 44.9168 146.051 45.6324L144.636 46.2841C139.166 48.8023 136.431 50.0615 134.612 48.6805C132.793 47.2994 133.094 44.1927 133.696 37.9792L133.851 36.3718C134.023 34.606 134.108 33.7232 133.854 32.9045C133.599 32.0859 133.033 31.4242 131.901 30.1008L130.871 28.896C126.889 24.2391 124.897 21.9104 125.592 19.6759C126.287 17.4412 129.208 16.7803 135.05 15.4586L136.561 15.1166C138.221 14.741 139.051 14.5532 139.718 14.0473C140.384 13.5414 140.812 12.7746 141.666 11.241L142.445 9.8449Z" fill="#333333"/>
                                <path d="M202.798 9.8449C205.806 4.44831 207.31 1.75 209.559 1.75C211.808 1.75 213.312 4.44829 216.32 9.84488L217.098 11.241C217.953 12.7746 218.381 13.5414 219.047 14.0473C219.714 14.5532 220.543 14.741 222.204 15.1166L223.715 15.4586C229.557 16.7803 232.478 17.4412 233.173 19.6759C233.867 21.9104 231.876 24.2391 227.894 28.896L226.863 30.1008C225.732 31.4242 225.166 32.0859 224.911 32.9045C224.657 33.7232 224.742 34.606 224.913 36.3718L225.069 37.9792C225.671 44.1927 225.972 47.2994 224.153 48.6805C222.333 50.0615 219.599 48.8023 214.129 46.2841L212.714 45.6324C211.16 44.9168 210.383 44.5589 209.559 44.5589C208.735 44.5589 207.958 44.9168 206.404 45.6324L204.989 46.2841C199.519 48.8023 196.784 50.0615 194.965 48.6805C193.145 47.2994 193.447 44.1927 194.049 37.9792L194.204 36.3718C194.376 34.606 194.461 33.7232 194.206 32.9045C193.952 32.0859 193.386 31.4242 192.254 30.1008L191.224 28.896C187.242 24.2391 185.25 21.9104 185.945 19.6759C186.64 17.4412 189.561 16.7803 195.403 15.4586L196.914 15.1166C198.574 14.741 199.404 14.5532 200.071 14.0473C200.737 13.5414 201.164 12.7746 202.019 11.241L202.798 9.8449Z" fill="#333333"/>
                                <path d="M263.151 9.8449C266.159 4.44831 267.663 1.75 269.912 1.75C272.161 1.75 273.665 4.44829 276.673 9.84488L277.451 11.241C278.306 12.7746 278.733 13.5414 279.4 14.0473C280.067 14.5532 280.896 14.741 282.556 15.1166L284.068 15.4586C289.909 16.7803 292.831 17.4412 293.525 19.6759C294.22 21.9104 292.229 24.2391 288.247 28.896L287.216 30.1008C286.085 31.4242 285.519 32.0859 285.264 32.9045C285.01 33.7232 285.095 34.606 285.266 36.3718L285.422 37.9792C286.024 44.1927 286.325 47.2994 284.506 48.6805C282.686 50.0615 279.952 48.8023 274.482 46.2841L273.067 45.6324C271.513 44.9168 270.736 44.5589 269.912 44.5589C269.088 44.5589 268.311 44.9168 266.757 45.6324L265.342 46.2841C259.872 48.8023 257.137 50.0615 255.318 48.6805C253.498 47.2994 253.799 44.1927 254.402 37.9792L254.557 36.3718C254.728 34.606 254.814 33.7232 254.559 32.9045C254.305 32.0859 253.739 31.4242 252.607 30.1008L251.577 28.896C247.594 24.2391 245.603 21.9104 246.298 19.6759C246.993 17.4412 249.914 16.7803 255.756 15.4586L257.267 15.1166C258.927 14.741 259.757 14.5532 260.423 14.0473C261.09 13.5414 261.517 12.7746 262.372 11.241L263.151 9.8449Z" fill="#333333"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_1_2">
                                    <rect width="298" height="50" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <div className="pic">
                        <img width={50} src={require("../assets/amandacrew.jpeg")} alt="Amanda" />
                    </div>
                    <h3>Amanda</h3>
                    <div className="description">
                        <p>Delicious food!</p>
                    </div>
                </div>
                <div className="testimonial4">
                    <div id="stars">
                        <svg width="75" height="13" viewBox="0 0 298 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_1_2)">
                                <path d="M82.0917 9.8449C85.1 4.44831 86.6041 1.75 88.8529 1.75C91.1018 1.75 92.6059 4.44829 95.6141 9.84488L96.3924 11.241C97.2474 12.7746 97.6746 13.5414 98.3413 14.0473C99.0077 14.5532 99.8376 14.741 101.498 15.1166L103.009 15.4586C108.851 16.7803 111.772 17.4412 112.467 19.6759C113.162 21.9104 111.17 24.2391 107.188 28.896L106.157 30.1008C105.026 31.4242 104.46 32.0859 104.205 32.9045C103.951 33.7232 104.036 34.606 104.207 36.3718L104.363 37.9792C104.965 44.1927 105.266 47.2994 103.447 48.6805C101.628 50.0615 98.8928 48.8023 93.4232 46.2841L92.0081 45.6324C90.4539 44.9168 89.6768 44.5589 88.8529 44.5589C88.0291 44.5589 87.252 44.9168 85.6978 45.6324L84.2827 46.2841C78.8131 48.8023 76.0782 50.0615 74.2589 48.6805C72.4396 47.2994 72.7407 44.1927 73.3428 37.9792L73.4985 36.3718C73.6696 34.606 73.7552 33.7232 73.5006 32.9045C73.2461 32.0859 72.6802 31.4242 71.5485 30.1008L70.5182 28.896C66.5357 24.2391 64.5444 21.9104 65.2393 19.6759C65.9342 17.4412 68.8551 16.7803 74.6968 15.4586L76.2082 15.1166C77.8682 14.741 78.6982 14.5532 79.3647 14.0473C80.0311 13.5414 80.4586 12.7746 81.3134 11.241L82.0917 9.8449Z" fill="#333333"/>
                                <path d="M21.7388 9.8449C24.747 4.44831 26.2511 1.75 28.5 1.75C30.7489 1.75 32.253 4.44829 35.2612 9.84488L36.0394 11.241C36.8944 12.7746 37.3217 13.5414 37.9884 14.0473C38.6548 14.5532 39.4846 14.741 41.1447 15.1166L42.6562 15.4586C48.4977 16.7803 51.4188 17.4412 52.1137 19.6759C52.8086 21.9104 50.8174 24.2391 46.8348 28.896L45.8045 30.1008C44.6728 31.4242 44.1068 32.0859 43.8522 32.9045C43.5979 33.7232 43.6834 34.606 43.8544 36.3718L44.0102 37.9792C44.6122 44.1927 44.9134 47.2994 43.0941 48.6805C41.2747 50.0615 38.5398 48.8023 33.0702 46.2841L31.6552 45.6324C30.101 44.9168 29.3239 44.5589 28.5 44.5589C27.6761 44.5589 26.899 44.9168 25.3448 45.6324L23.9298 46.2841C18.4601 48.8023 15.7253 50.0615 13.906 48.6805C12.0867 47.2994 12.3877 44.1927 12.9898 37.9792L13.1456 36.3718C13.3167 34.606 13.4022 33.7232 13.1477 32.9045C12.8931 32.0859 12.3273 31.4242 11.1956 30.1008L10.1652 28.896C6.18272 24.2391 4.19145 21.9104 4.88638 19.6759C5.5813 17.4412 8.50217 16.7803 14.3439 15.4586L15.8552 15.1166C17.5153 14.741 18.3453 14.5532 19.0117 14.0473C19.6782 13.5414 20.1056 12.7746 20.9605 11.241L21.7388 9.8449Z" fill="#333333"/>
                                <path d="M142.445 9.8449C145.453 4.44831 146.957 1.75 149.206 1.75C151.455 1.75 152.959 4.44829 155.967 9.84488L156.745 11.241C157.6 12.7746 158.028 13.5414 158.694 14.0473C159.361 14.5532 160.19 14.741 161.851 15.1166L163.362 15.4586C169.204 16.7803 172.125 17.4412 172.82 19.6759C173.514 21.9104 171.523 24.2391 167.541 28.896L166.51 30.1008C165.379 31.4242 164.813 32.0859 164.558 32.9045C164.304 33.7232 164.389 34.606 164.56 36.3718L164.716 37.9792C165.318 44.1927 165.619 47.2994 163.8 48.6805C161.981 50.0615 159.246 48.8023 153.776 46.2841L152.361 45.6324C150.807 44.9168 150.03 44.5589 149.206 44.5589C148.382 44.5589 147.605 44.9168 146.051 45.6324L144.636 46.2841C139.166 48.8023 136.431 50.0615 134.612 48.6805C132.793 47.2994 133.094 44.1927 133.696 37.9792L133.851 36.3718C134.023 34.606 134.108 33.7232 133.854 32.9045C133.599 32.0859 133.033 31.4242 131.901 30.1008L130.871 28.896C126.889 24.2391 124.897 21.9104 125.592 19.6759C126.287 17.4412 129.208 16.7803 135.05 15.4586L136.561 15.1166C138.221 14.741 139.051 14.5532 139.718 14.0473C140.384 13.5414 140.812 12.7746 141.666 11.241L142.445 9.8449Z" fill="#333333"/>
                                <path d="M202.798 9.8449C205.806 4.44831 207.31 1.75 209.559 1.75C211.808 1.75 213.312 4.44829 216.32 9.84488L217.098 11.241C217.953 12.7746 218.381 13.5414 219.047 14.0473C219.714 14.5532 220.543 14.741 222.204 15.1166L223.715 15.4586C229.557 16.7803 232.478 17.4412 233.173 19.6759C233.867 21.9104 231.876 24.2391 227.894 28.896L226.863 30.1008C225.732 31.4242 225.166 32.0859 224.911 32.9045C224.657 33.7232 224.742 34.606 224.913 36.3718L225.069 37.9792C225.671 44.1927 225.972 47.2994 224.153 48.6805C222.333 50.0615 219.599 48.8023 214.129 46.2841L212.714 45.6324C211.16 44.9168 210.383 44.5589 209.559 44.5589C208.735 44.5589 207.958 44.9168 206.404 45.6324L204.989 46.2841C199.519 48.8023 196.784 50.0615 194.965 48.6805C193.145 47.2994 193.447 44.1927 194.049 37.9792L194.204 36.3718C194.376 34.606 194.461 33.7232 194.206 32.9045C193.952 32.0859 193.386 31.4242 192.254 30.1008L191.224 28.896C187.242 24.2391 185.25 21.9104 185.945 19.6759C186.64 17.4412 189.561 16.7803 195.403 15.4586L196.914 15.1166C198.574 14.741 199.404 14.5532 200.071 14.0473C200.737 13.5414 201.164 12.7746 202.019 11.241L202.798 9.8449Z" fill="#333333"/>
                                <path d="M263.151 9.8449C266.159 4.44831 267.663 1.75 269.912 1.75C272.161 1.75 273.665 4.44829 276.673 9.84488L277.451 11.241C278.306 12.7746 278.733 13.5414 279.4 14.0473C280.067 14.5532 280.896 14.741 282.556 15.1166L284.068 15.4586C289.909 16.7803 292.831 17.4412 293.525 19.6759C294.22 21.9104 292.229 24.2391 288.247 28.896L287.216 30.1008C286.085 31.4242 285.519 32.0859 285.264 32.9045C285.01 33.7232 285.095 34.606 285.266 36.3718L285.422 37.9792C286.024 44.1927 286.325 47.2994 284.506 48.6805C282.686 50.0615 279.952 48.8023 274.482 46.2841L273.067 45.6324C271.513 44.9168 270.736 44.5589 269.912 44.5589C269.088 44.5589 268.311 44.9168 266.757 45.6324L265.342 46.2841C259.872 48.8023 257.137 50.0615 255.318 48.6805C253.498 47.2994 253.799 44.1927 254.402 37.9792L254.557 36.3718C254.728 34.606 254.814 33.7232 254.559 32.9045C254.305 32.0859 253.739 31.4242 252.607 30.1008L251.577 28.896C247.594 24.2391 245.603 21.9104 246.298 19.6759C246.993 17.4412 249.914 16.7803 255.756 15.4586L257.267 15.1166C258.927 14.741 259.757 14.5532 260.423 14.0473C261.09 13.5414 261.517 12.7746 262.372 11.241L263.151 9.8449Z" fill="#333333"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_1_2">
                                    <rect width="298" height="50" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <div className="pic">
                        <img width={50} src={require("../assets/amandacrew.jpeg")} alt="Amanda" />
                    </div>
                    <h3>Amanda</h3>
                    <div className="description">
                        <p>Delicious food!</p>
                    </div>
                </div>
            </section>
            <section className="info">
                <div className="text">
                    <h1>Little Lemon</h1>
                    <h2>Donostia</h2>
                    <p>We are a family owned Basque restaurant, focused on traditional recipes served with a modern twist.<br/><br/>Have a taste of the best Donostiarra pintxos in town cooked by Mario and Adrian, best chefs in town!</p>
                </div>
                <div className="chefs">
                    <img id="top" width={300} src={require("../assets/Mario and Adrian A.jpg")} alt="Mario and Adrian" />
                    <img id="bottom" width={300} src={require("../assets/Mario and Adrian b.jpg")} alt="Mario and Adrian" />
                </div>
            </section>
        </main>
    );
}

export default Main;