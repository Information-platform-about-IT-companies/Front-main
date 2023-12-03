import { authAPI } from "api/authApi";
import { useEffect, useState } from "react";
import { useErrorHandler } from "hooks/useErrorHandler";
import { EmailSent } from "components/EmailSent/EmailSent";
import { useLocation } from "react-router-dom";
import Spinner from "UI-KIT/Spinner/Spinner";

export const withEmailSentScreen = (Component) =>
  function WithSignupConfirm() {
    const [credentials, setCredentials] = useState({ email: null, password: null });
    const [isVisible, setIsVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [Error, setError] = useErrorHandler();
    const location = useLocation();

    useEffect(() => {
      setIsVisible(false);
    }, [location]);

    const askForEmail = async (userCredentials) => {
      setIsLoading(true);
      try {
        await authAPI.repeatConfirmSignup(userCredentials ?? credentials);
        setCredentials((prevCredentials) => ({
          ...prevCredentials,
          ...(userCredentials ? { ...userCredentials } : {}),
        }));
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    const showEmailSentScreen = (userCredentials) => {
      setIsVisible(true);
      setCredentials((prevCredentials) => ({
        ...prevCredentials,
        ...(userCredentials ? { ...userCredentials } : {}),
      }));
    };

    return isVisible ? (
      <>
        {isLoading && (
          <div className="spinner__wrapper">
            <Spinner />
          </div>
        )}
        <EmailSent
          askForEmail={(e) => {
            e.preventDefault();
            askForEmail();
          }}
        />
        <Error />
      </>
    ) : (
      <Component showEmailSentScreen={showEmailSentScreen} askForEmail={askForEmail} />
    );
  };
