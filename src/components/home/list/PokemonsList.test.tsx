import React from "react";
import { mount } from "enzyme";
import axios from "axios";
import PokemonsList from "./PokemonsList";
import IPokemonApiResponse from "../../../common/api/IPokemonApiResponse";
import IPokemonApiResponseData from "./IPokemonApiResponseData";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";

jest.mock("axios");

describe("PokemonsList", () => {
  it("renders_pokemons", async () => {
    var axiosMock = axios as jest.Mocked<typeof axios>;
    var fakeData: IPokemonApiResponse<IPokemonApiResponseData> = {
        data: {
        count: 1,
        results: [
            { name: "dummy_pokemon1", url: "https://dummy_url/1" }]
        },
    };
    axiosMock.get.mockResolvedValue(fakeData);
    await act(async () => {
      var container = await mount(
          <BrowserRouter>
              <PokemonsList />
          </BrowserRouter>
      );
      setImmediate(() => {
        container.update();
        expect(container.find("a").first().text() == "dummy_pokemon1").toBe(true);
        expect(container.find("a").first().getDOMNode().getAttribute("href")?.indexOf("details/1") > -1).toBe(true);       
      });
    });
  });

  // TODO: Add tests for: empty response, move then one pokemon, paged result.
});
