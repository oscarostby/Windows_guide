import React, { useState } from 'react';
import styled from 'styled-components';

// Styled components
const QuizContainer = styled.div`
  max-width: 800px;
  margin: 50px auto;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const Question = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
`;

const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const OptionButton = styled.button`
  margin-bottom: 10px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const CorrectOption = styled(OptionButton)`
  background-color: #4caf50;
  color: #fff;
`;

const IncorrectOption = styled(OptionButton)`
  background-color: #f44336;
  color: #fff;
`;

const ReviewContainer = styled.div`
  margin-top: 20px;
`;

const ReviewItem = styled.div`
  margin-bottom: 20px;
`;

const ReviewQuestionNumber = styled.span`
  font-size: 20px;
  font-weight: bold;
  margin-right: 10px;
`;

const ReviewQuestion = styled.span`
  font-weight: bold;
`;

const ReviewCorrectAnswer = styled.span`
  color: #4caf50;
  font-weight: bold;
`;

const ReviewIncorrectAnswer = styled.span`
  color: #f44336;
  font-weight: bold;
`;

const Results = styled.p`
  margin-top: 20px;
  font-size: 18px;
  color: #333;
`;

// Quiz component
const Quiz = () => {
  const [questions, setQuestions] = useState([
    { id: 1, question: 'What is the default port number for DNS?', answer: '53', options: ['21', '80', '53'], skipped: false },
    { id: 2, question: 'What is the default port number for DHCP?', answer: '67', options: ['53', '67', '80'], skipped: false },
    { id: 3, question: 'What is the default port number for RDP?', answer: '3389', options: ['22', '443', '3389'], skipped: false },
    { id: 4, question: 'Which DNS record type is used to map domain names to IPv4 addresses?', answer: 'A', options: ['CNAME', 'MX', 'A'], skipped: false },
    { id: 5, question: 'Which command is used to release the IP address obtained through DHCP in Windows?', answer: 'ipconfig /release', options: ['ipconfig /renew', 'ipconfig /release', 'ipconfig /flushdns'], skipped: false },
    { id: 6, question: 'What is the primary function of a DHCP server in a network?', answer: 'To assign IP addresses dynamically', options: ['To assign IP addresses statically', 'To manage domain names', 'To manage DNS records'], skipped: false },
    { id: 7, question: 'What is the primary purpose of DNS?', answer: 'To translate domain names to IP addresses', options: ['To translate IP addresses to domain names', 'To assign IP addresses dynamically', 'To manage network security'], skipped: false },
    { id: 8, question: 'Which protocol is used to automatically assign IP addresses to devices in a network?', answer: 'DHCP (Dynamic Host Configuration Protocol)', options: ['HTTP (Hypertext Transfer Protocol)', 'FTP (File Transfer Protocol)', 'DHCP (Dynamic Host Configuration Protocol)'], skipped: false },
    { id: 9, question: 'What is the role of a DNS server in a network?', answer: 'Resolve domain names to IP addresses', options: ['Assign IP addresses to devices', 'Manage network security', 'Host websites'], skipped: false },
    { id: 10, question: 'Which command is used to flush the DNS resolver cache in Windows?', answer: 'ipconfig /flushdns', options: ['ipconfig /release', 'ipconfig /renew', 'ipconfig /flushdns'], skipped: false },
    { id: 11, question: 'Which tool is used to manage DHCP settings in Windows Server?', answer: 'DHCP Management Console', options: ['Active Directory Users and Computers', 'Group Policy Management Console', 'DHCP Management Console'], skipped: false },
    { id: 12, question: 'What does DNS stand for?', answer: 'Domain Name System', options: ['Dynamic Network Service', 'Domain Name System', 'Data Network Security'], skipped: false },
    { id: 13, question: 'Which DNS record type specifies the mail server responsible for accepting email on behalf of a domain?', answer: 'MX (Mail Exchange)', options: ['MX (Mail Exchange)', 'A (Address)', 'CNAME (Canonical Name)'], skipped: false },
    { id: 14, question: 'What is the primary function of a DNS server?', answer: 'To translate domain names to IP addresses', options: ['To assign IP addresses to devices', 'To manage domain names', 'To translate IP addresses to domain names'], skipped: false },
    { id: 15, question: 'Which tool is used to configure DNS settings in Windows Server?', answer: 'DNS Manager', options: ['Server Manager', 'Group Policy Management Console', 'DNS Manager'], skipped: false },
    { id: 16, question: 'Which command is used to renew the IP address obtained through DHCP in Windows?', answer: 'ipconfig /renew', options: ['ipconfig /release', 'ipconfig /renew', 'ipconfig /flushdns'], skipped: false },
    { id: 17, question: 'What is the primary role of a DHCP server?', answer: 'To assign IP addresses dynamically', options: ['To assign IP addresses statically', 'To manage domain names', 'To manage DNS records'], skipped: false },
    { id: 18, question: 'Which DNS record type is used to map aliases to canonical names?', answer: 'CNAME (Canonical Name)', options: ['MX (Mail Exchange)', 'A (Address)', 'CNAME (Canonical Name)'], skipped: false },
    { id: 19, question: 'What is the default port number for HTTP?', answer: '80', options: ['21', '80', '443'], skipped: false },
    { id: 20, question: 'What is the primary purpose of DHCP?', answer: 'To assign IP addresses automatically', options: ['To assign IP addresses manually', 'To manage domain names', 'To manage DNS records'], skipped: false },
  ]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answeredCount, setAnsweredCount] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [failedQuestions, setFailedQuestions] = useState([]);

  const handleAnswer = (selectedOption) => {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOption === currentQuestion.answer) {
      setCorrectCount(correctCount + 1);
    } else {
      setFailedQuestions([...failedQuestions, { ...currentQuestion, selectedOption }]);
    }
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setAnsweredCount(answeredCount + 1);
  };

  const handleSkip = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setAnsweredCount(answeredCount + 1);
  };

  const reviewFailedQuestions = () => {
    return (
      <ReviewContainer>
        {failedQuestions.map((question, index) => (
          <ReviewItem key={index}>
            <ReviewQuestionNumber>Question {question.id}:</ReviewQuestionNumber>
            <ReviewQuestion>{question.question}</ReviewQuestion>
            {question.options.map((option, optionIndex) => (
              <div key={optionIndex}>
                {option === question.answer ? (
                  <ReviewCorrectAnswer>{option}</ReviewCorrectAnswer>
                ) : option === question.selectedOption ? (
                  <ReviewIncorrectAnswer>{option}</ReviewIncorrectAnswer>
                ) : (
                  <span>{option}</span>
                )}
              </div>
            ))}
            <div>Correct Answer: <ReviewCorrectAnswer>{question.answer}</ReviewCorrectAnswer></div>
          </ReviewItem>
        ))}
      </ReviewContainer>
    );
  };

  return (
    <QuizContainer>
      {currentQuestionIndex < questions.length ? (
        <>
          <Question>{questions[currentQuestionIndex].question}</Question>
          <OptionsContainer>
            {questions[currentQuestionIndex].options.map((option, index) => (
              <OptionButton
                key={index}
                onClick={() => handleAnswer(option)}
              >
                {option}
              </OptionButton>
            ))}
          </OptionsContainer>
          <OptionButton onClick={handleSkip}>Skip</OptionButton>
          <p>Question {currentQuestionIndex + 1} of {questions.length}</p>
        </>
      ) : (
        <Results>
          Quiz completed! Correct Answers: {correctCount} out of {answeredCount}
          {failedQuestions.length > 0 && (
            <>
              <ReviewContainer>
                {reviewFailedQuestions()}
              </ReviewContainer>
            </>
          )}
        </Results>
      )}
    </QuizContainer>
  );
};

export default Quiz;
