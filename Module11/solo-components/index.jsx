import React from 'react';
import ReactDOM from 'react-dom/client';
import Badge from "./components/Badge/index";
import Banner from "./components/Banner/index";
import Card from "./components/Card";
import TestimonialWithImage from "./components/Testimonial";

function App() {
    return (
        <div>
            <h1>Your components go here</h1>
            <div className="components">
                <div className="badges">
                    <Badge color="gray" shape="pill">Banner</Badge>
                    <Badge color="red" shape="pill">Banner</Badge>
                    <Badge color="yellow" shape="pill">Banner</Badge>
                    <Badge color="green" shape="pill">Banner</Badge>
                    <Badge color="blue" shape="pill">Banner</Badge>
                    <Badge color="indigo" shape="pill">Banner</Badge>
                    <Badge color="purple" shape="pill">Banner</Badge>
                    <Badge color="pink" shape="pill">Banner</Badge>
                </div>
                <div className="badges">
                    <Badge color="gray" shape="square">Banner</Badge>
                    <Badge color="red" shape="square">Banner</Badge>
                    <Badge color="yellow" shape="square">Banner</Badge>
                    <Badge color="green" shape="square">Banner</Badge>
                    <Badge color="blue" shape="square">Banner</Badge>
                    <Badge color="indigo" shape="square">Banner</Badge>
                    <Badge color="purple" shape="square">Banner</Badge>
                    <Badge color="pink" shape="square">Banner</Badge>
                </div>

                <div className="banners">
                    <div className="col">
                        <Banner style="success">
                            <Banner.Title>Congratulations!</Banner.Title>
                            <Banner.Content>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur,
                                ipsum similique veniam.</Banner.Content>
                        </Banner>

                        <Banner style="warning">
                            <Banner.Title>Attention</Banner.Title>
                            <Banner.Content>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur,
                                ipsum similique veniam.</Banner.Content>
                        </Banner>

                        <Banner style="error">
                            <Banner.Title>There is a problem with your application</Banner.Title>
                            <Banner.Content>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur,
                                ipsum similique veniam.</Banner.Content>
                        </Banner>

                        <Banner style="neutral">
                            <Banner.Title>Update available</Banner.Title>
                            <Banner.Content>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur,
                                ipsum similique veniam.</Banner.Content>
                        </Banner>
                    </div>
                    <div className="col">
                        <Banner style="success">
                            <Banner.Title>Congratulations!</Banner.Title>
                        </Banner>

                        <Banner style="warning">
                            <Banner.Title>Attention</Banner.Title>
                        </Banner>

                        <Banner style="error">
                            <Banner.Title>There is a problem with your application</Banner.Title>
                        </Banner>

                        <Banner style="neutral">
                            <Banner.Title>Update available</Banner.Title>
                        </Banner>
                    </div>
                </div>

                <div className="cards">
                    <Card title="Easy Deployment">
                        Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
                    </Card>
                </div>

                <div className="testimonials">
                    <TestimonialWithImage>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit.
                    </TestimonialWithImage>
                </div>
            </div>
        </div>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
