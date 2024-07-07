import React from 'react';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './FAQ.css'; 

function FAQ() {
  const faqs = [
    {
      question: 'Do I need to have prior Product Management and Project Management experience to enroll in the program?',
      answer: 'No, the program is designed to be inclusive of all levels of experience. All topics will be covered from the basics, making it suitable for individuals from any field of work.'
    },
    {
      question: 'What is the minimum system configuration required?',
      answer: 'A computer with at least 4GB RAM, 64-bit processor, and an internet connection is required to attend the online sessions and complete the coursework.'
    }
  ];

  return (
    <Box className="faq-section">
      <Typography variant="h4" className="faq-title">Frequently Asked Questions</Typography>
      {faqs.map((faq, index) => (
        <Accordion key={index} className="faq-item">
          <AccordionSummary expandIcon={<ExpandMoreIcon />} className="faq-question">
            <Typography>{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails className="faq-answer">
            <Typography>{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}

export default FAQ;
