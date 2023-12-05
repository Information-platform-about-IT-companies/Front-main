import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { LoadingStatus } from "services/constants";
import { companyAPI } from "api/companyAPI";
import { useLoggedIn } from "hooks/useLoggedIn";

export const useFetchCompanies = (...params) => {
  const loggedIn = useLoggedIn();
  const [searchParams] = useSearchParams();
  const initialState = { totalPages: 1, companies: [], loadingStatus: LoadingStatus.idle };
  const [state, setState] = useState(initialState);
  const updateCompany = (company) => {
    setState({
      ...state,
      companies: state.companies.map((item) => (item.id === company.id ? company : item)),
    });
  };

  function constructQuery() {
    const filterCities = JSON.parse(searchParams.get("cities"));
    const filterServices = JSON.parse(searchParams.get("services"));
    const page = searchParams.get("page");
    const pageSize = searchParams.get("pageSize");

    return [
      ...(params.includes("page") && page ? [["page", Number(page)]] : []),
      ...(params.includes("cities") && filterCities ? filterCities.map((id) => ["city", id]) : []),
      ...(params.includes("services") && filterServices
        ? filterServices.map((id) => ["service", id])
        : []),
      ...(params.includes("isFavorited") ? [["is_favorited", 1]] : []),
      ...(params.includes("pageSize") && pageSize ? [["page_size", Number(pageSize)]] : []),
    ];
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const query = constructQuery();
        const {
          results: companies,
          total_objects: totalCompanies,
          total_pages: totalPages,
        } = await companyAPI.fetchCompanies(query, { withCredentials: loggedIn });
        setState({
          ...state,
          companies,
          totalCompanies,
          totalPages,
          loadingStatus: LoadingStatus.succeeded,
        });
      } catch {
        setState({ ...state, loadingStatus: LoadingStatus.failed });
      }
    };
    setState({ ...state, loadingStatus: LoadingStatus.loading });

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loggedIn, searchParams]);

  return [state, { updateCompany }];
};
