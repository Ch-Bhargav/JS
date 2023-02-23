import React from 'react';

function HomePage() {
  return (
    <div style={{ 
      backgroundColor: '#f0f0f0',
      padding: '50px',
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center'
    }}>
      <h1 style={{ 
        fontSize: '48px',
        fontWeight: 'bold',
        margin: '0',
        color: '#333'
      }}>Employmint</h1>
      <h2 style={{ 
        fontSize: '24px',
        margin: '10px 0',
        color: '#666'
      }}>Your partner in employability</h2>
      <p style={{ 
        fontSize: '18px',
        margin: '30px 0'
      }}>We help job seekers and employers connect and succeed.</p>

      <h3 style={{ 
        fontSize: '24px',
        margin: '40px 0 20px 0'
      }}>What We Offer</h3>
      <ul style={{ 
        listStyle: 'none',
        padding: '0',
        margin: '0'
      }}>
        <li style={{ 
          fontSize: '18px',
          margin: '10px 0'
        }}>Career coaching and guidance</li>
        <li style={{ 
          fontSize: '18px',
          margin: '10px 0'
        }}>Resume and cover letter writing services</li>
        <li style={{ 
          fontSize: '18px',
          margin: '10px 0'
        }}>Interview preparation and practice</li>
        <li style={{ 
          fontSize: '18px',
          margin: '10px 0'
        }}>Networking opportunities and events</li>
        <li style={{ 
          fontSize: '18px',
          margin: '10px 0'
        }}>Job matching and placement services</li>
      </ul>

      <h3 style={{ 
        fontSize: '24px',
        margin: '40px 0 20px 0'
      }}>Why Choose Employmint?</h3>
      <p style={{ 
        fontSize: '18px',
        margin: '0 0 30px 0'
      }}>Our team of experienced professionals are dedicated to helping you achieve your career goals. We understand that the job search process can be overwhelming and intimidating, but we're here to make it easier for you.</p>

      <h3 style={{ 
        fontSize: '24px',
        margin: '40px 0 20px 0'
      }}>Get Started Today</h3>
      <p style={{ 
        fontSize: '18px',
        margin: '0 0 30px 0'
      }}>Whether you're a job seeker or an employer, we're here to help. Contact us today to learn more about our services and how we can assist you.</p>

      <button style={{ 
        backgroundColor: '#333',
        color: '#fff',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        fontSize: '18px',
        cursor: 'pointer'
      }}>Contact Us</button>
    </div>
  );
}

export default HomePage;
