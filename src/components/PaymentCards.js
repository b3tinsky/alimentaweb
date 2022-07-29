import React from "react";
import { Card } from "react-bootstrap";
import paymentStyles from "../styles/components/paymentCards.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaypal } from "@fortawesome/free-brands-svg-icons";
import {
    faCreditCard,
    faStore,
    faMoneyBill,
    faHome,
} from "@fortawesome/free-solid-svg-icons";

function PaymentCards() {
    return (
        <div className={paymentStyles.paymentCards}>
            <Card className={paymentStyles.paymentOption}>
                <FontAwesomeIcon
                    icon={faHome}
                    className={paymentStyles.imageIcon}
                    size="3x"
                />
                <Card.Body className={paymentStyles.cardBody}>
                    <Card.Title className={paymentStyles.cardText}>
                        Donaciones en especie
                    </Card.Title>
                    <Card.Text className={paymentStyles.cardText}>
                        Poner Direccion
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className={paymentStyles.paymentOption}>
                <FontAwesomeIcon
                    icon={faCreditCard}
                    className={paymentStyles.imageIcon}
                    size="3x"
                />
                <Card.Body className={paymentStyles.cardBody}>
                    <Card.Title className={paymentStyles.cardText}>
                        Tarjeta de Credito
                    </Card.Title>
                    <Card.Text className={paymentStyles.cardText}>
                        Aceptamos Visa, Mastercard y American Express.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className={paymentStyles.paymentOption}>
                <FontAwesomeIcon
                    icon={faMoneyBill}
                    className={paymentStyles.imageIcon}
                    size="3x"
                />
                <Card.Body className={paymentStyles.cardBody}>
                    <Card.Title className={paymentStyles.cardText}>
                        Cuenta Bancaria
                    </Card.Title>
                    <Card.Text className={paymentStyles.cardText}>
                        <strong>Número de cuenta:</strong> 194119917 <br />
                        <strong>Clabe:</strong> 062580 001941 199171 <br />
                        <strong>Referencia:</strong> Alimenta una familia <br />
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card className={paymentStyles.paymentOption}>
                <FontAwesomeIcon
                    icon={faStore}
                    className={paymentStyles.imageIcon}
                    size="3x"
                />
                <Card.Body className={paymentStyles.cardBody}>
                    <Card.Title className={paymentStyles.cardText}>
                        Oxxo
                    </Card.Title>
                    <Card.Text className={paymentStyles.cardText}>
                        Dona mediante deposito en Oxxo <br />
                        <strong>Tarjeta de débito:</strong> 4320 4901 0098 9779
                        <br />
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card className={paymentStyles.paymentOption}>
                <FontAwesomeIcon
                    icon={faPaypal}
                    className={paymentStyles.imageIcon}
                    size="3x"
                />
                <Card.Body className={paymentStyles.cardBody}>
                    <Card.Title className={paymentStyles.cardText}>
                        PayPal
                    </Card.Title>
                    <Card.Text className={paymentStyles.cardText}>
                        Dona a nuestra cuenta de PayPal.
                    </Card.Text>
                    <Card.Link
                        className={paymentStyles.cardLink}
                        href="https://www.paypal.com/paypalme/comedorinfantil">
                        Saber más
                    </Card.Link>
                </Card.Body>
            </Card>
            <Card className={paymentStyles.paymentOption}>
                <Card.Img
                    className={paymentStyles.moneypoolIcon}
                    variant="top"
                    src={require("../images/comoAyudar/moneypool.png")}
                />
                <Card.Body className={paymentStyles.cardBody}>
                    <Card.Title className={paymentStyles.cardText}>
                        Moneypool
                    </Card.Title>
                    <Card.Text className={paymentStyles.cardText}>
                        Dona a nuestra cuenta de Moneypool.
                    </Card.Text>
                    <Card.Link
                        className={paymentStyles.cardLink}
                        href="https://www.moneypool.mx/p/yAW1A2k">
                        Saber más
                    </Card.Link>
                </Card.Body>
            </Card>
        </div>
    );
}

export default PaymentCards;
