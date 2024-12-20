import Login from "./Login";
import {fireEvent, render, screen} from "@testing-library/react";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "../store";
import {PersistGate} from "redux-persist/integration/react";

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

    test("should render right data", async () => {
        render(
            <BrowserRouter>
                <Provider store={store}>
                    <Login/>
                </Provider>
            </BrowserRouter>
        )

        let username = await screen.findByTestId("username");
        let password = await screen.findByTestId("password");
        fireEvent.change(username, {
            target: {
                value: "firstData"
            }
        });
        fireEvent.change(password,
            {
                target: {
                    value: "secondData"
                }
            });

        expect(username.value).toBe("firstData");
        expect(password.value).toBe("secondData");
    });

    test("should render right user data", async () => {
        render(
            <BrowserRouter>
                <Provider store={store}>
                    <Login/>
                </Provider>
            </BrowserRouter>
        )

        let username = await screen.findByTestId("username");
        fireEvent.change(username, {
            target: {
                value: "firstData"
            }
        });

        expect(username.value).toBe("firstData");
    });
    test("should render right password data", async () => {
        render(
            <BrowserRouter>
                <Provider store={store}>
                    <Login/>
                </Provider>
            </BrowserRouter>
        )

        let password = await screen.findByTestId("password");
        fireEvent.change(password, {
            target: {
                value: "firstData"
            }
        });

        expect(password.value).toBe("firstData");
    });
});