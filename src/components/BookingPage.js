import {
  Box,
  VStack,
  Heading,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Select,
  Textarea,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useEffect } from "react";

// Hook imports
import useSubmit from "../hooks/useSubmit";

// Context imports
import { useAlertContext } from "../context/alertContext";

// CSS imports
import "./Footer.css";

export default function BookingPage() {
  const { isLoading, response, submit } = useSubmit();
  const { onOpen } = useAlertContext();

  const formik = useFormik({
    initialValues: {
      date: "",
      time: "",
      occasion: "none",
      numberOfGuests: "",
      specialRequests: "",
      firstName: "",
      lastName: "",
      contactNumber: "",
      email: "",
    },
    onSubmit: (values) => {
      submit("placeholder url", values);
    },
    validationSchema: Yup.object({
      date: Yup.date("invalid date").required("Required"),
      time: Yup.string().required("Required"),
      occasion: Yup.string().required("Required"),
      numberOfGuests: Yup.number().required("Required"),
      specialRequests: Yup.string(),
      firstName: Yup.string().required("Required"),
      lastName: Yup.string().required("Required"),
      contactNumber: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
    }),
  });

  useEffect(() => {
    if (response) {
      onOpen(response.type, response.message);
      if (response.type === "success") {
        formik.resetForm();
      }
    }
  }, [response]);

  return (
    <VStack>
      <Heading as="h1">Book a Table</Heading>
      <Box p={6} rounded="md" w="100%">
        <form onSubmit={formik.handleSubmit}>
          <VStack spacing={4}>
            <FormControl isInvalid={formik.errors.date && formik.touched.date}>
              <FormLabel htmlFor="date">Date</FormLabel>
              <Input
                id="date"
                name="date"
                value={formik.getFieldProps("date").value}
                onChange={formik.getFieldProps("date").onChange}
                onBlur={formik.getFieldProps("date").onBlur}
              />
              <FormErrorMessage>{formik.errors.date}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={formik.errors.time && formik.touched.time}>
              <FormLabel htmlFor="time">Time</FormLabel>
              <Input
                id="time"
                name="time"
                value={formik.getFieldProps("time").value}
                onChange={formik.getFieldProps("time").onChange}
                onBlur={formik.getFieldProps("time").onBlur}
              />
              <FormErrorMessage>{formik.errors.time}</FormErrorMessage>
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="occasion">Occasion</FormLabel>
              <Select
                id="occasion"
                name="occasion"
                value={formik.getFieldProps("occasion").value}
                onChange={formik.getFieldProps("occasion").onChange}
                onBlur={formik.getFieldProps("occasion").onBlur}
              >
                <option value="birthday">Birthday</option>
                <option value="engagement">Engagement</option>
                <option value="anniversary">Anniversary</option>
                <option value="none">None</option>
              </Select>
            </FormControl>
            <FormControl
              isInvalid={
                formik.errors.numberOfGuests && formik.touched.numberOfGuests
              }
            >
              <FormLabel htmlFor="numberOfGuests">Number of Guests</FormLabel>
              <Input
                id="numberOfGuests"
                name="numberOfGuests"
                value={formik.getFieldProps("numberOfGuests").value}
                onChange={formik.getFieldProps("numberOfGuests").onChange}
                onBlur={formik.getFieldProps("numberOfGuests").onBlur}
              />
              <FormErrorMessage>
                {formik.errors.numberOfGuests}
              </FormErrorMessage>
            </FormControl>
            <FormControl
              isInvalid={
                formik.errors.specialRequests && formik.touched.specialRequests
              }
            >
              <FormLabel htmlFor="specialRequests">
                Special Requests, if any
              </FormLabel>
              <Textarea
                id="specialRequests"
                name="specialRequests"
                height={300}
                value={formik.getFieldProps("specialRequests").value}
                onChange={formik.getFieldProps("specialRequests").onChange}
                onBlur={formik.getFieldProps("specialRequests").onBlur}
              />
              <FormErrorMessage>
                {formik.errors.specialRequests}
              </FormErrorMessage>
            </FormControl>
            <FormControl
              isInvalid={formik.errors.firstName && formik.touched.firstName}
            >
              <FormLabel htmlFor="firstName">First Name</FormLabel>
              <Input
                id="firstName"
                name="firstName"
                value={formik.getFieldProps("firstName").value}
                onChange={formik.getFieldProps("firstName").onChange}
                onBlur={formik.getFieldProps("firstName").onBlur}
              />
              <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
            </FormControl>
            <FormControl
              isInvalid={formik.errors.lastName && formik.touched.lastName}
            >
              <FormLabel htmlFor="lastName">Last Name</FormLabel>
              <Input
                id="lastName"
                name="lastName"
                value={formik.getFieldProps("lastName").value}
                onChange={formik.getFieldProps("lastName").onChange}
                onBlur={formik.getFieldProps("lastName").onBlur}
              />
              <FormErrorMessage>{formik.errors.lastName}</FormErrorMessage>
            </FormControl>
            <FormControl
              isInvalid={
                formik.errors.contactNumber && formik.touched.contactNumber
              }
            >
              <FormLabel htmlFor="contactNumber">Contact Number</FormLabel>
              <Input
                id="contactNumber"
                name="contactNumber"
                type="contactNumber"
                value={formik.getFieldProps("contactNumber").value}
                onChange={formik.getFieldProps("contactNumber").onChange}
                onBlur={formik.getFieldProps("contactNumber").onBlur}
              />
              <FormErrorMessage>{formik.errors.contactNumber}</FormErrorMessage>
            </FormControl>
            <FormControl
              isInvalid={formik.errors.email && formik.touched.email}
            >
              <FormLabel htmlFor="email">Email Address</FormLabel>
              <Input
                id="email"
                name="email"
                type="email"
                value={formik.getFieldProps("email").value}
                onChange={formik.getFieldProps("email").onChange}
                onBlur={formik.getFieldProps("email").onBlur}
              />
              <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
            </FormControl>
            <Button
              isLoading={isLoading}
              type="submit"
              colorScheme="yellow"
              width="full"
            >
              Submit
            </Button>
          </VStack>
        </form>
      </Box>
    </VStack>
  );
}
