//fireEvent: 가상돔과 상호작용이 가능한 객체
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);

  const button = screen.getByRole('button', {name: 'change to blue!'});
  //toHaveStyle: expect의 결과 값을 스타일보유 여부로 판단
  expect(button).toHaveStyle({backgroundColor: 'red'});

  fireEvent.click(button)
  expect(button.textContent).toBe('change to red!');

});
