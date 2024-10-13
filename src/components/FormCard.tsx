"use client";
import { useState, useEffect } from "react";
import { Product } from "@/types";
import { IconExternalLink } from "@tabler/icons-react";
import Image from "next/image";
import React from "react";
import { validateForm } from "@/helpers/validate-form";
import { useRouter } from "next/navigation";
import { submitData } from "@/helpers/getData";

interface Props {
  formClasses: {
    cardWrapper: string;
    topDiv: string;
    imgWrap: string;
    headingWrap: string;
    middleDiv: string;
    bottomDiv: string;
    button: string;
    price: string;
  };
  product: Product;
}

function FormCard({ formClasses, product }: Props) {
  const [formData, setFormData] = useState<{ [key: string]: string }>({});

  const router = useRouter();

  useEffect(() => {
    const fields = product?.form_fields;
    const initialFormData: { [key: string]: string } = {};
    fields &&
      fields.forEach((field) => {
        initialFormData[field.toLowerCase()] = ""; // Create key from the field in lowercase
      });
    setFormData(initialFormData);
  }, [product]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    let productURL = product.redirect_url || product.file_name || "";
    if (validateForm(formData, product?.form_fields ?? []) === true) {
      let body = {
        ...formData,
        product_id: product?.id,
      };

      try {
        let submitResponse = await submitData(body);
        submitResponse && window.open(productURL?.toString(), "_blank");

        const resetFormData: { [key: string]: string } = {};
        product?.form_fields &&
          product?.form_fields.forEach((field) => {
            resetFormData[field.toLowerCase()] = ""; // Set empty values for each field
          });
        setFormData(resetFormData); // Reset the form data with empty fields
      } catch (error) {
        console.log("something went wrong", error);
      }
    } else {
      console.log("Validation error");
    }
  };

  const clickHandler = () => {
    const checkoutItems = ["session_booking", "e_course", "digital_download"];

    if (
      product?.product_type &&
      checkoutItems?.includes(product?.product_type)
    ) {
      router.push(`/checkout?product_id=${product?.id}`);
      return;
    }

    if (product?.form_fields && product?.form_fields?.length > 1) {
      handleSubmit();
    }

    // if (
    //   !product?.checkout_page_header_image_base64 &&
    //   !product?.checkout_page_description &&
    //   !product?.checkout_page_header_image_base64 &&
    //   !product?.checkout_button_title
    // ) {
    //   handleSubmit();
    // }
  };


  return (
    <div className={formClasses.cardWrapper}>
      <div className={formClasses.topDiv}>
        {product?.section_type === "callout" && (
          <div id="img_wrap" className={formClasses?.imgWrap}>
            <Image
              src={product?.thumbnail_image_base64}
              alt={product?.thumbnail_page_heading}
              height={70}
              width={70}
            />
          </div>
        )}
        <div id="heading_wrap" className={formClasses?.headingWrap}>
          <h4>{product?.thumbnail_page_heading}</h4>
          <p>{product?.thumbnail_page_sub_heading}</p>
          <p id="price" className={formClasses?.price}>
            <span>{product?.price}</span>
            <span>{product?.discount_price}</span>
          </p>
        </div>
      </div>

      {product?.form_fields && product?.form_fields?.length > 0 && (
        <form className={formClasses.middleDiv}>
          {product?.form_fields?.map((field) => (
            <input
              type={field === "Email" ? "email" : "text"}
              name={field.toLowerCase()}
              placeholder={`Enter your ${field.toLowerCase()}`}
              value={formData[field.toLowerCase() as keyof typeof formData]}
              onChange={handleInputChange}
              key={field}
            />
          ))}
        </form>
      )}

      <div className={formClasses.bottomDiv}>
        <button onClick={() => clickHandler()}>
          <p>{product?.thumbnail_page_button_title}</p>
          <span>
            <IconExternalLink size={22} color="#fff" />
          </span>
        </button>
      </div>
    </div>
  );
}

export default FormCard;
