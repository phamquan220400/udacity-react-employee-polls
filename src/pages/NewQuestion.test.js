import NewQuestion from "./NewQuestion";
import {fireEvent, render, screen} from "@testing-library/react";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "../store";
import {PersistGate} from "redux-persist/integration/react";

describe("Render New Question Page success", () => {
    test("should render '<New Question/>'", () => {
        const view = render(
            <BrowserRouter>
                <Provider store={store}>
                    <PersistGate loading={null} persistor={store}>
                        <NewQuestion/>
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
                        <NewQuestion/>
                </Provider>
            </BrowserRouter>
        )

        const firstOptionData = await screen.findByTestId("FirstOption");
        const secondOptionData = await screen.findByTestId("SecondOption");

        fireEvent.change(firstOptionData,
            {
                target: {
                    value: "firstData"
                }
            });
        fireEvent.change(secondOptionData,
            {
                target: {
                    value: "secondData"
                }
            });
        expect(firstOptionData.value).toBe("firstData");
        expect(secondOptionData.value).toBe("secondData");
    });
})
