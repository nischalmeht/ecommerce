import { create } from "zustand";
import axiosInstance from "../lib/axios";
import { toast } from "react-hot-toast";

const useCartStore = create((set, get) => ({
	cart: [],
	coupon: null,
	total: 0,
	subtotal: 0,
	isCouponApplied: false,

	getMyCoupon: async () => {
		try {
			const response = await axiosInstance.get("/coupons");
			set({ coupon: response.data });
		} catch (error) {
			console.error("Error fetching coupon:", error);
		}
	},

	applyCoupon: async (code) => {
		try {
			const response = await axiosInstance.post("/coupons/validate", { code });
			set({ coupon: response.data, isCouponApplied: true });
			get().calculateTotals();
			toast.success("Coupon applied successfully");
		} catch (error) {
			toast.error(error.response?.data?.message || "Failed to apply coupon");
		}
	},

	removeFromCart: async (productId) => {
		try {
			await axiosInstance.delete(`/cart`, { data: { productId } });
			set((prevState) => ({
				cart: prevState.cart.filter((item) => item._id !== productId),
			}));
			get().calculateTotals();
			toast.success("Removed from cart");
		} catch (error) {
			toast.error("Failed to remove item");
		}
	},

	clearCart: () => {
		set({ cart: [], coupon: null, total: 0, subtotal: 0 });
	},

	calculateTotals: () => {
		const { cart, coupon } = get();
		const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
		let total = subtotal;

		if (coupon) {
			const discount = subtotal * (coupon.discountPercentage / 100);
			total = subtotal - discount;
		}

		set({ subtotal, total });
	},

	removeCoupon: () => {
		set({ coupon: null, isCouponApplied: false });
		get().calculateTotals();
		toast.success("Coupon removed");
	},

	updateQuantity: async (productId, quantity) => {
		try {
			if (quantity <= 0) {
				await get().removeFromCart(productId);
				return;
			}
			await axiosInstance.put(`/cart/${productId}`, { quantity });
			set((prevState) => ({
				cart: prevState.cart.map((item) =>
					item._id === productId ? { ...item, quantity } : item
				),
			}));
			get().calculateTotals();
		} catch (error) {
			toast.error("Failed to update quantity");
		}
	},
}));

export default useCartStore;
