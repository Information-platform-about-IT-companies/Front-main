import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { makeFakeUser } from "mocks/tests/mocks";
import ProfileInfo from "./ProfileInfo";

describe("ProfileInfo component", () => {
  it("renders ProfileInfo component", () => {
    render(
      <BrowserRouter>
        <ProfileInfo />
      </BrowserRouter>,
    );
    const profileElement = screen.getByText(/Профиль пользователя/i);
    expect(profileElement).toBeInTheDocument();
  });
});

// describe("ProfileInfo change", () => {
//   it("on change values in inputs", () => {
//     render(
//       <BrowserRouter>
//         <ProfileInfo />
//       </BrowserRouter>,
//     );
//     const onChange = jest.fn();
//     const formComponent = screen.getByTestId("profileInfoForm");
//     expect(formComponent).toBeInTheDocument();

//     const profileFirstName = screen.getByTestId('firstName');

//     userEvent.type(profileFirstName, { target: { value: 'John' } });
//     expect(onChange).toHaveBeenCalledTimes(1);

//   });

// });

// describe('ProfileInfo form tests', () => {
//     it('Success test', async () => {
//         render(
//             <BrowserRouter>
//               <ProfileInfo />
//             </BrowserRouter>,
//           );
//       const handleSubmit = jest.fn();

//       const FormComponent = screen.getByTestId("profileInfoForm");
//       expect(FormComponent).toBeInTheDocument();

//       const profileFirstName = screen.getByTestId('firstName');
//       const profileLastName = screen.getByTestId('lastName');
//       const profileEmail = screen.getByTestId('email');
//       const submitButton = screen.getByTestId('submitInfoButton');

//       userEvent.type(profileFirstName, makeFakeUser.firstName);
//       userEvent.type(profileLastName, makeFakeUser.lastName);
//       userEvent.type(profileEmail, makeFakeUser.email);
//       userEvent.click(submitButton);
//       await waitFor(() =>
//         expect(handleSubmit).toHaveBeenCalledWith({
//           firstName: makeFakeUser.firstName,
//           lastName: makeFakeUser.lastName,
//           email: makeFakeUser.email,
//         }),
//       );
//     });

//   });
