import React, { useState } from "react";
import { ArrowRight, Phone, Shield } from "lucide-react";
import "../css/booking.css";  

let OtpCheckCard = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  let handleSendOtp = () => {
    if (phoneNumber.length >= 10) {
      setIsLoading(true);
      setTimeout(() => {
        setIsOtpSent(true);
        setIsLoading(false);
      }, 1500);
    }
  };

  const handleVerifyOtp = () => {
    if (otp.length >= 4) {
      console.log("Verifying OTP:", otp);
      // Your verification logic
    }
  };

  return (
    <div className="otp-container">
      <div className="otp-card">
        <div className="otp-card-header">
          <div className="otp-shield-icon">
            <Shield className="shield-icon" />
          </div>
          <h2 className="otp-title">Verify Your Booking</h2>
          <p className="otp-subtitle">
            Enter your phone number and OTP to check your booking details
          </p>
        </div>

        <div className="otp-card-content">
          <div className="otp-section">
            <label className="otp-label">Phone Number</label>
            <div className="otp-input-wrapper">
              <div className="otp-icon-left">
                <Phone className="input-icon" />
              </div>
              <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="Enter your phone number"
                className="otp-input"
                disabled={isOtpSent}
              />
              <button
                onClick={handleSendOtp}
                disabled={phoneNumber.length < 10 || isOtpSent || isLoading}
                className={`otp-send-button ${isOtpSent ? "sent" : ""}`}
              >
                {isLoading ? (
                  <div className="spinner"></div>
                ) : isOtpSent ? (
                  "Sent"
                ) : (
                  "Send OTP"
                )}
              </button>
            </div>
            {isOtpSent && (
              <p className="otp-success-message">
                <span className="otp-success-dot"></span>
                OTP sent successfully to {phoneNumber}
              </p>
            )}
          </div>

          <div className="otp-section">
            <label className="otp-label">Verification Code</label>
            <div className="otp-input-wrapper">
              <input
                type="text"
                value={otp}
                onChange={(e) =>
                  setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))
                }
                placeholder="Enter 6-digit OTP"
                className="otp-input otp-code-input"
                disabled={!isOtpSent}
                maxLength={6}
              />
              <button
                onClick={handleVerifyOtp}
                disabled={!isOtpSent || otp.length < 4}
                className="otp-verify-button"
              >
                <ArrowRight className="arrow-icon" />
              </button>
            </div>
          </div>

          <button
            onClick={handleVerifyOtp}
            disabled={!isOtpSent || otp.length < 4}
            className="otp-action-button"
          >
            Verify & Check Booking
            <ArrowRight className="arrow-icon" />
          </button>

          <div className="otp-help-text">
            <p>
              Didn't receive the code?{" "}
              <button
                onClick={() => {
                  if (isOtpSent) {
                    setIsOtpSent(false);
                    setOtp("");
                  }
                }}
                className="otp-resend-link"
                disabled={!isOtpSent}
              >
                Resend OTP
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtpCheckCard;
