import React from 'react';

const TermsCondition = () => {
    const styles = {
        container: {
            padding: '20px',
            fontFamily: 'Arial, sans-serif',
            color: '#333',
        },
        heading: {
            color: '#007bff', // Bootstrap primary color
        },
        subheading: {
            color: '#6c757d', // Bootstrap secondary color
        },
        list: {
            listStyleType: 'none',
            paddingLeft: '0',
        },
        listItem: {
            marginBottom: '10px',
        },
    };

    return (
        <div className="terms-condition" style={styles.container}>
            <h1 style={styles.heading}>Terms and Conditions</h1>
            <p>Welcome to PakTech!</p>
            <p>These terms and conditions outline the rules and regulations for the use of PakTech's Website, located at www.paktech.com.</p>
            <p>By accessing this website we assume you accept these terms and conditions. Do not continue to use PakTech if you do not agree to take all of the terms and conditions stated on this page.</p>
            
            <h2 style={styles.subheading}>Cookies</h2>
            <p>We employ the use of cookies. By accessing PakTech, you agreed to use cookies in agreement with the PakTech's Privacy Policy.</p>
            
            <h2 style={styles.subheading}>License</h2>
            <p>Unless otherwise stated, PakTech and/or its licensors own the intellectual property rights for all material on PakTech. All intellectual property rights are reserved. You may access this from PakTech for your own personal use subjected to restrictions set in these terms and conditions.</p>
            
            <h2 style={styles.subheading}>You must not:</h2>
            <ul style={styles.list}>
                <li style={styles.listItem}>Republish material from PakTech</li>
                <li style={styles.listItem}>Sell, rent or sub-license material from PakTech</li>
                <li style={styles.listItem}>Reproduce, duplicate or copy material from PakTech</li>
                <li style={styles.listItem}>Redistribute content from PakTech</li>
            </ul>
            
            <h2 style={styles.subheading}>Hyperlinking to our Content</h2>
            <p>The following organizations may link to our Website without prior written approval:</p>
            <ul style={styles.list}>
                <li style={styles.listItem}>Government agencies;</li>
                <li style={styles.listItem}>Search engines;</li>
                <li style={styles.listItem}>News organizations;</li>
                <li style={styles.listItem}>Online directory distributors may link to our Website in the same manner as they hyperlink to the Websites of other listed businesses; and</li>
                <li style={styles.listItem}>System wide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our Web site.</li>
            </ul>
            
            <h2 style={styles.subheading}>iFrames</h2>
            <p>Without prior approval and written permission, you may not create frames around our Webpages that alter in any way the visual presentation or appearance of our Website.</p>
            
            <h2 style={styles.subheading}>Content Liability</h2>
            <p>We shall not be hold responsible for any content that appears on your Website. You agree to protect and defend us against all claims that is rising on your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.</p>
            
            <h2 style={styles.subheading}>Reservation of Rights</h2>
            <p>We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request. We also reserve the right to amen these terms and conditions and it’s linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow these linking terms and conditions.</p>
            
            <h2 style={styles.subheading}>Removal of links from our website</h2>
            <p>If you find any link on our Website that is offensive for any reason, you are free to contact and inform us any moment. We will consider requests to remove links but we are not obligated to or so or to respond to you directly.</p>
            
            <h2 style={styles.subheading}>Disclaimer</h2>
            <p>To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. Nothing in this disclaimer will:</p>
            <ul style={styles.list}>
                <li style={styles.listItem}>limit or exclude our or your liability for death or personal injury;</li>
                <li style={styles.listItem}>limit or exclude our or your liability for fraud or fraudulent misrepresentation;</li>
                <li style={styles.listItem}>limit any of our or your liabilities in any way that is not permitted under applicable law; or</li>
                <li style={styles.listItem}>exclude any of our or your liabilities that may not be excluded under applicable law.</li>
            </ul>
            <p>The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort and for breach of statutory duty.</p>
            <p>As long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.</p>
</div>
    );
};

export default TermsCondition;