// Code generated by protoc-gen-go-grpc. DO NOT EDIT.

package protos

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

// MirControllerServiceClient is the client API for MirControllerService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type MirControllerServiceClient interface {
	DataManageRequest(ctx context.Context, in *GeneralReq, opts ...grpc.CallOption) (*GeneralResp, error)
}

type mirControllerServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewMirControllerServiceClient(cc grpc.ClientConnInterface) MirControllerServiceClient {
	return &mirControllerServiceClient{cc}
}

func (c *mirControllerServiceClient) DataManageRequest(ctx context.Context, in *GeneralReq, opts ...grpc.CallOption) (*GeneralResp, error) {
	out := new(GeneralResp)
	err := c.cc.Invoke(ctx, "/ymir.backend.mir_controller_service/data_manage_request", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// MirControllerServiceServer is the server API for MirControllerService service.
// All implementations should embed UnimplementedMirControllerServiceServer
// for forward compatibility
type MirControllerServiceServer interface {
	DataManageRequest(context.Context, *GeneralReq) (*GeneralResp, error)
}

// UnimplementedMirControllerServiceServer should be embedded to have forward compatible implementations.
type UnimplementedMirControllerServiceServer struct {
}

func (UnimplementedMirControllerServiceServer) DataManageRequest(context.Context, *GeneralReq) (*GeneralResp, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DataManageRequest not implemented")
}

// UnsafeMirControllerServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to MirControllerServiceServer will
// result in compilation errors.
type UnsafeMirControllerServiceServer interface {
	mustEmbedUnimplementedMirControllerServiceServer()
}

func RegisterMirControllerServiceServer(s grpc.ServiceRegistrar, srv MirControllerServiceServer) {
	s.RegisterService(&MirControllerService_ServiceDesc, srv)
}

func _MirControllerService_DataManageRequest_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GeneralReq)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MirControllerServiceServer).DataManageRequest(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/ymir.backend.mir_controller_service/data_manage_request",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MirControllerServiceServer).DataManageRequest(ctx, req.(*GeneralReq))
	}
	return interceptor(ctx, in, info, handler)
}

// MirControllerService_ServiceDesc is the grpc.ServiceDesc for MirControllerService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var MirControllerService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "ymir.backend.mir_controller_service",
	HandlerType: (*MirControllerServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "data_manage_request",
			Handler:    _MirControllerService_DataManageRequest_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "backend.proto",
}

// HelServiceClient is the client API for HelService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type HelServiceClient interface {
	HelOpsProcess(ctx context.Context, in *HelOpsRequest, opts ...grpc.CallOption) (*HelOpsResponse, error)
	HelTaskProcess(ctx context.Context, in *HelTaskRequest, opts ...grpc.CallOption) (*HelTaskResponse, error)
}

type helServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewHelServiceClient(cc grpc.ClientConnInterface) HelServiceClient {
	return &helServiceClient{cc}
}

func (c *helServiceClient) HelOpsProcess(ctx context.Context, in *HelOpsRequest, opts ...grpc.CallOption) (*HelOpsResponse, error) {
	out := new(HelOpsResponse)
	err := c.cc.Invoke(ctx, "/ymir.backend.hel_service/hel_ops_process", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *helServiceClient) HelTaskProcess(ctx context.Context, in *HelTaskRequest, opts ...grpc.CallOption) (*HelTaskResponse, error) {
	out := new(HelTaskResponse)
	err := c.cc.Invoke(ctx, "/ymir.backend.hel_service/hel_task_process", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// HelServiceServer is the server API for HelService service.
// All implementations should embed UnimplementedHelServiceServer
// for forward compatibility
type HelServiceServer interface {
	HelOpsProcess(context.Context, *HelOpsRequest) (*HelOpsResponse, error)
	HelTaskProcess(context.Context, *HelTaskRequest) (*HelTaskResponse, error)
}

// UnimplementedHelServiceServer should be embedded to have forward compatible implementations.
type UnimplementedHelServiceServer struct {
}

func (UnimplementedHelServiceServer) HelOpsProcess(context.Context, *HelOpsRequest) (*HelOpsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method HelOpsProcess not implemented")
}
func (UnimplementedHelServiceServer) HelTaskProcess(context.Context, *HelTaskRequest) (*HelTaskResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method HelTaskProcess not implemented")
}

// UnsafeHelServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to HelServiceServer will
// result in compilation errors.
type UnsafeHelServiceServer interface {
	mustEmbedUnimplementedHelServiceServer()
}

func RegisterHelServiceServer(s grpc.ServiceRegistrar, srv HelServiceServer) {
	s.RegisterService(&HelService_ServiceDesc, srv)
}

func _HelService_HelOpsProcess_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(HelOpsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(HelServiceServer).HelOpsProcess(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/ymir.backend.hel_service/hel_ops_process",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(HelServiceServer).HelOpsProcess(ctx, req.(*HelOpsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _HelService_HelTaskProcess_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(HelTaskRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(HelServiceServer).HelTaskProcess(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/ymir.backend.hel_service/hel_task_process",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(HelServiceServer).HelTaskProcess(ctx, req.(*HelTaskRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// HelService_ServiceDesc is the grpc.ServiceDesc for HelService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var HelService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "ymir.backend.hel_service",
	HandlerType: (*HelServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "hel_ops_process",
			Handler:    _HelService_HelOpsProcess_Handler,
		},
		{
			MethodName: "hel_task_process",
			Handler:    _HelService_HelTaskProcess_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "backend.proto",
}
