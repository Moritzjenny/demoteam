import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from email.utils import formatdate
import os

def send_mail(firstName, name, mail, street, plz, place, message):
    # Email configuration
    from_email = 'noreply@demoteamzuoz.ch'
    smtp_server = 'lx20.hoststar.hosting'
    smtp_port = 465  # Use port 465 for SMTP-SSL
    smtp_username = 'noreply@demoteamzuoz.ch'
    smtp_password = os.environ.get('MAIL_PW')

    if not smtp_password:
        # Read the pw from .env file
        with open(".env", "r") as env_file:
            for line in env_file:
                key, value = line.strip().split("=")
                if key == "MAIL_PW":
                    smtp_password = value

        if not smtp_password:
            print("Mail PW not found in .env file.")
            return

    to_email = os.environ.get('TO_MAIL')
    if not to_email:
        # Read the to_mail from .env file
        with open(".env", "r") as env_file:
            for line in env_file:
                key, value = line.strip().split("=")
                if key == "TO_MAIL":
                    to_email = value

        if not to_email:
            print("To mail not found in .env file.")
            return

    # Create the email content
    subject = 'Neue Auftragsanfrage'
    message = f'Neue Auftragsanfrage von {firstName} {name}\n' \
              f'Email: {mail}\n' \
              f'Strasse & Nr: {street}\n' \
              f'PLZ: {plz}\n' \
              f'Ort: {place}\n' \
              f'Nachricht: {message}'

    print(message)

    # Create the MIME message
    msg = MIMEMultipart()
    msg['From'] = from_email
    msg['To'] = to_email
    msg['Subject'] = subject
    msg['Date'] = formatdate(localtime=True)
    msg.attach(MIMEText(message, 'plain'))

    # Send the email using SMTP
    try:
        print('Sending email...')
        with smtplib.SMTP_SSL(smtp_server, smtp_port) as server:
            server.login(smtp_username, smtp_password)
            server.sendmail(from_email, msg['To'], msg.as_string())
        print('Email sent successfully.')
    except Exception as e:
        raise e
        print('Error sending email:', e)

# Example usage:
# send_mail('John', 'Doe', 'john.doe@example.com', '123456789', 'Hello, this is a test message.', {'label': 'Test Type'})
