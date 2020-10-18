import React from "react";
import { mount } from "enzyme";
import axios from "axios";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import DetailsContainer from "./DetailsContainer";
import IPokemonApiResponse from "../../common/api/IPokemonApiResponse";
import IPokemonDataApiResponseData from "./api/IPokemonDataApiResponseData";

jest.mock("axios");

describe("DetailsContainer", () => {
  it("renders_empty_pokemon", async () => {
    var axiosMock = axios as jest.Mocked<typeof axios>;
    var fakeData: IPokemonApiResponse<IPokemonDataApiResponseData> = {
      data: {
        name: "dummy_pokemon",
        abilities: [],
        stats: [],
        moves: [],
      },
    };
    axiosMock.get.mockResolvedValue(fakeData);
    await act(async () => {
      const routeComponentPropsMock = {
        history: {} as any,
        location: {} as any,
        match: {
          params: { id: 1 },
        } as any,
      };

      var container = mount(
        <BrowserRouter>
          <DetailsContainer {...routeComponentPropsMock} />
        </BrowserRouter>
      );
      setImmediate(() => {
        container.update();
        expect(
          container.find("h2").first().text() == "Details: dummy_pokemon"
        ).toBe(true);
      });
    });
  });

  //TODO: Add tests for non-empty abilities and moves.
});
