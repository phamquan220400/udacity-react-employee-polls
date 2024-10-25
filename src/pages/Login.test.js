import Login from "./Login";
import {fireEvent, render, screen} from "@testing-library/react";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "../store/store";
import {PersistGate} from "redux-persist/integration/react";
import userEvent from "@testing-library/user-event";

describe("Render login page", () => {
    test("should render '<New Question/>'", () => {
        const view = render(
            <BrowserRouter>
                <Provider store={store}>
                    <PersistGate loading={null} persistor={store}>
                        <Login/>
                    </PersistGate>
                </Provider>
            </BrowserRouter>
        );
        expect(view).toBeDefined();
        expect(view).toMatchSnapshot();
    });

    test("should render right data", () => {
        render(
            <BrowserRouter>
                <Provider store={store}>
                    <PersistGate loading={null} persistor={store}>
                        <Login/>
                    </PersistGate>
                </Provider>
            </BrowserRouter>
        )

        let username = screen.queryByTestId('username');
        let password = screen.queryByTestId('password');
        userEvent.type(username, "firstData");
        userEvent.type(password,"secondData");

        expect(username).toBe("firstData");
        expect(password).toBe("secondData");
    });
});